import React from 'react'
import './teamth.css';
import {useNavigate }from 'react-router-dom';
const TeamThank = () => {
  const navi = useNavigate();
  return ( 
    <>
       <div className='teamth'>
        <img src='https://thesellerslawfirm.com/wp-content/uploads/2017/05/thanks-for-joining-us.png' alt='g'/>
        <div className='teamclick'>
            <h2>WE WILL CONTACT YOU SOON 😊</h2>
            <h4>Want To Know About Us </h4>
            <button className='button-42' onClick={()=>{navi('/about')}}>Click Me</button>
        </div>
       </div>

    </>
  )
}

export default TeamThank;