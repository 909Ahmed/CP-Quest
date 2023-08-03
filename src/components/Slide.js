import React from 'react'

function Slide(props) {
  
  
    let {event ,start ,end ,host} = props;
    return (
    <>
        <div className='slide container' style={{fontSize:`50px`,fontWeight:`normal`}}>
            <div className='title'>
                {event}
            </div>
            <div className='time'>
                Time : {start.slice(start.indexOf('T')+1,start.lastIndexOf(':'))}-{end.slice(end.indexOf('T')+1,start.lastIndexOf(':'))} UST
            </div>
            <div className='host'>
                Host : {host.slice(0,host.indexOf('.'))}
            </div>
        </div>
    </>
  )
}

export default Slide