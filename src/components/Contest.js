import React, { useState ,useEffect ,useContext} from 'react'
import Slide from './Slide';
import saveContext from '../context/questions/savecontext';


function Contest() {


    const context =useContext(saveContext);
    let {contest} = context;
    const [cont, setCont] = useState([]);

    const firstTime = async ()=>{
        let data = await contest();
        setCont(data);
    }


    useEffect(() =>{
        firstTime();
        // eslint-disable-next-line
    },[])

    return (

    <>
    
        <div className='container-fluid shit' style={{height:`300px`,border:`2px`}}>    
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {cont.map((element,index) => {
                    return(
                        <button type="button" key={element.event} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1} aria-label="Slide 3"></button>
                    )                    
                    })}
                </div>
                <div className="carousel-inner"style={{textDecoration:`none`,height:`300px`}}>
                    <div className="wel carousel-item active text-white" style={{fontSize:`50px`,fontWeight:`normal`}}>
                        <div>
                            Welcome to CP Quest
                        </div>
                        <div>
                        ← Today's Contests →
                        </div>
                    </div>
                    {cont.map((element,index) => {
                        return(
                            <div className="carousel-item" key={element.event}>
                                <a href={element.href} rel="noreferrer" target="_blank">
                                    <Slide event={element.event} start={element.start} end={element.end} host={element.host}/>
                                </a>
                            </div>
                        )                       
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Contest