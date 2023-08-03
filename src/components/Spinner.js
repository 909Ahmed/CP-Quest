import React from 'react'
import { BallTriangle } from  'react-loader-spinner'

const Spinner =() => {
    return (
      <div className='spin'>
        <div className="d-flex justify-content-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#00FFFF"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      </div>
    )
}

export default Spinner