import React,{useContext} from 'react'
import saveContext from '../context/questions/savecontext'

function Alert() {
    
  const context = useContext(saveContext);
  const {alert} = context;

  return (
      <div className='try'>  
        {alert && <div className="alert alert-danger bg-danger text-white" role="alert">
        {alert}</div>
        }
      </div>
  )
}

export default Alert