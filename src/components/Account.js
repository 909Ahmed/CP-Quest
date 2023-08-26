import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import saveContext from '../context/questions/savecontext'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Account() {

    let context = useContext(saveContext);
    let {getUser} = context;
    
    const [user, setUser] = useState({name:"",email:"",problems:[]});
    
    let navigate = useNavigate();

    const firstTime = async ()=>{
        let userInfo = await getUser();
        setUser(userInfo);
    }

    useEffect(() => {
        if(Cookies.get('auth-token')){
            firstTime();
        }else{
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    

    return (
    <>
        <div className='container'>
            <div className='d-flex' style={{width:`900px`}}>
                <div className='account' style={{marginTop:`100px`}}>
                    <div className='info'>
                        <div>Name : {user.name}</div>
                        <div>Email : {user.email}</div>
                        <div>Solved : {user.problems.length} questions</div>
                    </div>
                    <div className='picdiv'>
                        <img className='pic' src='https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' alt='shit'/>
                    </div>
                </div>
            </div>
            <div className='probs my-5'>
                <div><h2>Problems Solved :</h2></div>
                <div className="short-div" >
                    {user.problems.map((name, index) => (
                        <span className="badge bg-info mx-1" key={index}>{name ? name : "NaN"}</span>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Account
