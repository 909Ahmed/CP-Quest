const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const { body ,validationResult } = require('express-validator')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchuser');
const JWT_SECRET = 'ASecretKey';

router.post('/addUser',[

    body('name', 'Enter a valid name').isLength({min : 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({min : 5}) 

],async (req, res)=>{
    const errors = validationResult(req)

    let success = false;
    if (!errors.isEmpty()){
        return res.status(400).json({success ,errors : errors.array()})
    }

    try{

        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(400).json({success ,error: 'email exists'})
        }

        let username = await User.findOne({name : req.body.name});
        if(username){
            return res.status(400).json({success ,error: 'name exists'})
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password ,salt)

        user = await User.create ({
            name : req.body.name,
            email : req.body.email, 
            password : secPass,
            problems : []
        })

        const data ={
            user:{
                id :user.id
            }
        }
        const authToken =jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success ,authToken});

    }catch(error){
        console.log(error.message);
        res.status(500).send("some error occured")
    }
})

router.post('/solvequest',fetchUser, async (req,res)=>{

    let success = false;
    try{
        const personId = req.user.id;

        let user = await User.findById(personId);
        
        if(user.problems.includes(req.body.name)){
            return res.status(400).json({success ,error : "already solved"})
        }

        const updatedPerson = await User.findByIdAndUpdate(
            personId,
            { $push: { problems: req.body.name } },
            { new: true }
        );

        success = true;
        res.json({success ,updatedPerson});
    } catch (err) {
        console.error(err);
        res.status(500).json({success, error: 'Failed to solve problem.' });
    }
})


//authenticating user
router.post('/gettoken',[

    body('name', 'Enter a valid name').isLength({min : 3}),
    body('password', 'Enter a valid password').exists() 

],async (req, res)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const {name, password} = req.body;

    try{
        let user = await User.findOne({ name});
        if(!user) {
            success =false
            return res.status(400).json({success ,error : "Please try to login with correct credentials"})
        }

        const passCompare = await  bcrypt.compare(password , user.password);

        if(!passCompare){
            success = false;
            return res.status(400).json({success ,error : "Please try to login with correct credentials"})
        }

        const payload ={
            user:{
                id :user.id
            }
        }
        const authToken =jwt.sign(payload, JWT_SECRET);
        success =true; 
        res.json({success ,authToken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured") 
    }
})


router.post('/Userdet',fetchUser,async (req, res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured") 
    }
})

module.exports = router