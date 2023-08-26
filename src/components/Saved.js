import React ,{useEffect ,useContext} from 'react'
import Questions from './Questions';
import { useNavigate } from 'react-router-dom';
import saveContext from '../context/questions/savecontext';
import Cookies from 'js-cookie';

const Saved=(props)=> {
    
    const context = useContext(saveContext);
    const {probs,getquest} = context;


    let navigate = useNavigate();    

    useEffect(() =>{
      if(Cookies.get('auth-token')){
        getquest();
      }else{
        navigate('/login')
      }
      // eslint-disable-next-line
    },[])

    
   return(
    <>
        <div className='container'>
            <h1 className='d-flex justify-content-center' style={{ marginTop: `65px`, color: '#00FFFF' }}>{props.title}</h1>
            <div className='row'>
                {probs.map((element,IND) => {
                    return (
                        <div className='col md-4' key={IND}>
                            <Questions from="saved" name={element.name} index={element.index} tags={element.tags} rating={element.rating ? element.rating : "NaN"} contestId={element.contestId} prob={element} />
                        </div>
                    )
                })}
            </div>
        </div>

    </>
  )
}

export default Saved
