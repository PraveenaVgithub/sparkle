import React from 'react'
import './tha.css';
import { useNavigate } from 'react-router-dom';
const Thank = () => {
    const navigate =useNavigate();
  return (
    <div className='thxbody'>
<div className="container thx">
  <h1>Thank you for your Booking 🧡🩵!</h1>
  <p>
    we wouldn't be able to do what we do without the support of people like
    you!!!
  </p>
  <p>
    From the bottom of our hearts, we want to express our deepest gratitude for
    your generous donation. Your contribution means the world to us, and it
    fuels our passion to keep making a difference. Every bit you've given allows
    us to continue providing vital services to those in need, create new
    opportunities for learning and growth, or push forward with important
    projects. Words cannot fully express how thankful we are for your belief in
    our cause. Your support is a true inspiration, and it motivates us to keep
    striving for a brighter future. Thank you for being a part of our journey!
  </p>
  <button className="thxbutton" onClick={()=>{navigate('/mainpage')}}>
    Back to Homepage
  </button>
</div>
</div>
  )
}

export default Thank