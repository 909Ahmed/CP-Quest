import React, { useContext ,useEffect ,useState } from 'react'
import saveContext from '../context/questions/savecontext'
import { useNavigate } from 'react-router-dom';


function Questions(props) {

    const [solve, setSolve] = useState(false);
    const context = useContext(saveContext);
    let navigate = useNavigate(); 

    const {addquest ,delquest ,solvequest ,showAlert ,solved} = context;
    let {from ,contestId ,index ,name ,rating ,tags, prob} =props    

    const url =`https://codeforces.com/problemset/problem/${contestId}/${index}`

    const addCheck = () =>{
        if(localStorage.getItem('token')){
            addquest(contestId ,index ,name ,rating ,tags)
        }else{
            navigate('/login');
        }
    }

    const solveCheck = () =>{
        if(localStorage.getItem('token')){
            solvequest(name)
        }else{
            navigate('/login');
        }
    }

    const isSolved = async () =>{
        let solvedProb =await solved();
        let result = false;
        if(solvedProb!==undefined){
            result = await solvedProb.includes(name);
        }
        setSolve(result)
    }

    useEffect(() => {
      isSolved();
    }, [])
    

  return (
        <div className="card" style={{color:`black`,backgroundColor:!solve?'rgb(255,255,0)':'rgb(0,255,0)'}}>
            <div className="backgroundEffect"></div>            
            <div className='add'>
            {/* <div>{isSolved()}</div> */}
                <div className="card-body">
                    <h5 className="card-title">{index}.{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{rating}</h6>
                    {tags && <div className="large-div" >
                        {tags.map((name, index) => (
                            <span className="badge bg-secondary mx-1" key={index}>{name ? name : "NaN"}</span>
                        ))}
                    </div>}
                </div>
                <div className='func d-flex'>
                    {from==="saved" && <i className="fa-solid fa-user-minus" data-toggle="tooltip" data-placement="right" title="unsave" onClick={()=>{delquest(prob._id);showAlert('unsaved')}} style={{cursor:'pointer'}}></i>}
                    {from!=="saved" && <i className="fa-solid fa-user-plus" data-toggle="tooltip" data-placement="right" title="save" onClick={()=>{addCheck();showAlert('saved')}} style={{cursor:'pointer'}}></i>}
                    <i className="fa-solid fa-circle-check my-2" data-toggle="tooltip" data-placement="right" title="solved" onClick={()=>{solveCheck();showAlert('solved')}} style={{cursor:'pointer'}}></i>
                </div>
            </div>
            {/* fix the solve gap */}
            <div className='largeSol'><a href={url} rel="noreferrer" target="_blank"><button className='solve'><span >Solve</span></button></a></div>
        </div>
  )
}

export default Questions