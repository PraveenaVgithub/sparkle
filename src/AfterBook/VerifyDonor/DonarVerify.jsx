import React from 'react'
import BookNav from '../BookNav/BookNav';
import './verify.css';
import { useNavigate } from 'react-router-dom';
const DonarVerify = () => {
  const nav = useNavigate();
    return (
          <>
           <div className='verbody'>
            <div className='container bg-transparent m-5'>
              <div className="row g-0 m-auto">
                <div className="col-6 col-md-4 " >  <BookNav/></div>
                <div className="col-sm-6 col-md-8  border ver">
                <h1 className="verh1">Enter Mobile Number</h1>
    <p>Enter your 10 digit Mobile Number</p>
    <input type="tel" id="mobile-number" name="mobile-number" className="verinput" placeholder="10-digit Mobile Number"/>
    <button type="button" className="verbutton" onClick={()=>{nav('/place')}}>Send OTP</button>
    <p className="instructions">A one-time password will be sent to this number for verification.</p>
                </div>
                </div>
                </div>
                </div>
            </>
      )
    }
export default DonarVerify;