import React from 'react'
import NavBar from '../Mainpage/NavBar/NavBar';
import './contact.css';
const Contact = () => {
  return (
    <>
     <div>
     <NavBar/>
     <div className="contcontainer">
        <div className="contmsg1">
          <h1 className="conth1">Get in Touch</h1>
          <form>
            <label htmlFor="fullname" className="contlabel">Full Name</label>
            <input type="text" id="fullname" name="fullname" className="continput" placeholder="Your Full Name" />
            <label htmlFor="email" className="contlabel">Email</label>
            <input type="email" id="email" name="email" className="continput" placeholder="Your Email Address" />
            <label htmlFor="address" className="contlabel">Address</label>
            <input type="text" id="address" name="address" className="continput" placeholder="Your Address" />
            <label htmlFor="phone" className="contlabel">Phone</label>
            <input type="tel" id="phone" name="phone" className="continput" placeholder="Your Phone Number" />
            <label htmlFor="message" className="contlabel">Your Message</label>
            <textarea id="message" name="message" className="conttextarea" placeholder="Write your message here..." defaultValue={""} />
            <button type="submit" className="contbtn">Send</button>
          </form>
        </div>
        <div className="contmsg2">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:example@xyz.com">sparklesharee@xyz.com</a></p>
          <p>Phone: <a href="tel:+1-000-000-000">+1-000-000-000</a></p>
          <p>Address: 1,Abc street, India</p>
          <p>Website: <a href="https://www.yourcompany.com">www.Sparkleshare.com</a></p>
        </div>
      </div>

   </div>
    </>
  )
}

export default Contact