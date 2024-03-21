import React, {useState}from 'react'
import BookNav from '../BookNav/BookNav';
import './schedule.css';
import {useNavigate} from 'react-router-dom';
const Schedule = () => {
  const navig = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
 console.log(date);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    flat: '',
    address: '',
    city: '',
    pincode: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setDonorInfo({
      ...donorInfo,
      [name]: type === 'checkbox' ? event.target.checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!donorInfo.termsAccepted) {
      alert('Please accept the Terms of Use to proceed.');
      return;
    }

    // Submit form data (replace with your form submission logic)
    console.log('Donation form submitted:', donorInfo);
  };
  return (
    <>
      <div className='pickbody'>
        <div className='container m-5'>
          <div className="row g-0 m-auto">
            <div className="col-6 col-md-4 " >  <BookNav/> </div>
            <div className="col-sm-6 col-md-8    pickmain">
            <div className="row m-auto ">
              <div className='col-6 datet '>
            <div className="date-time-input mt-5">
            <h2>Schedule Time</h2>
      <input
        type="date"
      // Extract date part from ISO string
        onChange={handleDateChange}
        className="date-input mb-5"
      />
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        className="time-input"
      />


      <p className='mt-5 pickp'>Please choose the timing between 9am to 3pm </p>
      <div>
        <label for="pickupNotes">NOTES FOR PICKUP PERSON (Optional)</label>
        <textarea
          id="pickupNotes"
          name="pickupNotes"
          value={donorInfo.pickupNotes}
          onChange={handleInputChange}
          rows="4" className='w-100'
        ></textarea>
        <p>We'll do our best to pass along your instructions to our Pickup Partner. Compliance isn't guaranteed.</p>
      </div>
      <div>
    </div>
</div>
              </div>
              {/* -------------------------------------- */}
              <div className='col-6 address'>
              <form onSubmit={handleSubmit} className="donation-form">
      <h2>DONOR DETAILS</h2>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={donorInfo.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={donorInfo.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="flat">Flat/Door #:</label>
        <input
          type="text"
          id="flat"
          name="flat"
          value={donorInfo.flat}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="address">Full Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={donorInfo.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={donorInfo.city}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={donorInfo.pincode}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label for="terms">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={donorInfo.termsAccepted}
            onChange={handleInputChange}
            required
          />
          I have read and agree with the Terms of Use.
        </label>
      </div>
      <button type="submit" onClick={()=>{navig('/verify')}}>Submit Donation</button>
    </form>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
    </>
  )
}

export default Schedule