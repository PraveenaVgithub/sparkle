import React,{useState} from 'react'
import BookNav from '../BookNav/BookNav';
import './Placeorder.css'
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
    const navi = useNavigate();
    const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleOTPChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (otp === '1111') {
      setIsOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };
    return (
        <>
        <div className='placebody'>
         <div className='container bg-transparent m-5'>
           <div className="row g-0 m-auto">
             <div className="col-6 col-md-4 " >  <BookNav/></div>
             <div className="col-sm-6 col-md-8  border place">
                      <h1 className='placeh1'>Confirm Booking?</h1>
                      <div className="otp-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={handleOTPChange}
          required
        />
        <button type="submit">Verify OTP</button>

        {isOtpVerified && (
          <div>
            <p>OTP verification successful!</p>
          </div>
        )}
      </form>

      <button className="confirmm-button" onClick={() => {navi('/thank')
      }}>
        Confirm Booking
      </button>
    </div>
    </div>
             </div>
             </div>
             </div>
         </>
      )
}

export default PlaceOrder