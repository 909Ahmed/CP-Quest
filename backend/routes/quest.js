const express = require('express');
const router = express.Router();
var fetchUser = require('../middleware/fetchuser');
const Quest = require('../modules/Quest')
const User = require('../modules/User');

router.get('/getquest',fetchUser, async (req,res)=>{
    try {
        const quests = await Quest.find({user : req.user.id}) 
        res.json(quests)    
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
})

router.post('/addquest',fetchUser, async (req,res)=>{

    let success = false;
    try{
        

        const personId = req.user.id;
        let {contestId ,index ,name ,rating ,tags} = req.body;
        
        let question = await Quest.findOne({user:req.user.id,name});
        if(question) {
            return res.status(400).json({success ,error : "already saved"})
        }
        const prob = new Quest({
            user : personId, contestId ,index ,name ,rating ,tags
        })

        const savedProb = await prob.save();
        success = true;
        res.json({success ,savedProb});
    } catch (err) {
        console.error(err);
        res.status(500).json({success, error: 'Failed to add problem.' });
    }
})


router.delete('/delquest/:id',fetchUser, async (req,res)=>{

    let success = false;
    try{
        prob = await Quest.findByIdAndDelete(req.params.id)
        success = true;
        res.json({success , prob : prob});

    } catch (err) {
        console.error(err);
        res.status(500).json({success ,error: 'Failed to del problem.' });
    }
})


module.exports = router