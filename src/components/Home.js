import React from 'react'
import Contest from './Contest'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>  
      
      <Contest key="contest"/>
      <div className='content'>
        <div className='intro bg-gradient-left my-3' style={{fontSize:`80px`,maxWidth:`500px`}}>
          <h1>Unlock the world of coding challenges</h1>
        </div>
        <div className='container' style={{padding:`5px`,maxWidth:`900px`,fontWeight:`500`,fontSize:`20px`,textIndent:`60px`,color:'#282c34'}}>
        <p>Welcome to CP Quest. We are excited to provide you with an interactive platform to enhance your coding skills and explore the world of programming.
        Whether you are a pro coder or just starting your coding journey, our website offers a diverse range of coding questions and challenges to challenge and inspire you.</p>
        </div>
        <div className='big d-flex container' style={{marginTop:`10vh`}}>
          <div className='features'>
            <div className='mx-2 my-1' style={{borderBottom:`solid 0.5px black`}}>
              Our features
            </div>
            <ul className='list mx-3'>
              <li>Solve questions from popular websites</li>
              <li>Stay Updated with Daily Contest Schedule</li>
              <li>Bookmark the good questions</li>
              <li>Track your progress</li>
              <li>Tailor the Challenge</li>
              <li>Explore Diverse Topics</li>
              <li>User Authentication and Registration</li>
              <li>Responsive Design</li>
              <li>User Dashboard</li>
            </ul>
          </div>
          <div className='quote'>

          </div>
        </div>
        <div className='to-go'>
        <Link to="/problems"><button type="button" className="btn btn-info" style={{margin:`40px`}}>Get Started</button></Link>
        <Link to="/login"><button type="button" className="btn btn-info" style={{margin:`40px`}}>Login/Signup</button></Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home