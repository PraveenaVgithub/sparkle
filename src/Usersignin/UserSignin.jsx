import React,{useState}from 'react'
import {useNavigate} from "react-router-dom";
import Backarrow from '../BackArrow/Backarrow';
import './Usersignin.css';
const UserSignin = () => {
    const navigate= useNavigate();
    const [usermail, setmail] = useState('');
  const [password, setPassword] = useState('');
  // backend
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usermail:', usermail);
    console.log('Password:', password);
   
  };


  return (
     <>
  <div className='ff'>
 <Backarrow/>
 <div className='bodysignin'>
 <div className='signin '>
 <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control inpsignin" id="InputEmail1" aria-describedby="emailHelp" onChange={(e) => setmail(e.target.value)}  required="required" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"  required >Password</label>
    <input type="password" className="form-control inpsignin" id="Password1"  onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn button-32" onClick={()=>{navigate("/mainpage")}} >Submit</button>

  <div className='d-flex flex-column m-5 '>
   <h4 className='mb-5 text-center firstuser'> First Time User</h4>
   <button onClick={()=>{navigate("/userlogin")}} onDoubleClick={handleSubmit}className='button-85 '> Click Here</button>
    </div>
</form>
</div>
</div>
</div>
     </>
  )
}

export default UserSignin