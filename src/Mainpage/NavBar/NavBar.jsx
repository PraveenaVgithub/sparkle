import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import UserLogin from '../../UserLogin/UserLogin';
import { useParams } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate() 
  const { username } = useParams();  console.log("Username:", username); 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light navbody ">
    <div className="container-fluid ">
    <img src={logo} alt='fd' style={{width:"100px" ,height:"70px" }} className=" logo d-inline-block align-text-top" />
    <button class="navbar-toggler burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* navitem list */}
  
    <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <NavLink to="/mainpage" className="navlink">Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/about" className="navlink">About</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/contact" className="navlink">Contact</NavLink>
    </li>
    <li class="nav-item">
    <button class="button-61" onClick={()=>{navigate("/choose")}} >Book Now</button>
    </li>
  </ul>
</div>

    {/* username logo */}
   <div  >
   <span class="material-symbols-outlined me-3 fs-2">
account_circle
</span>
<h3>{username} </h3>
   </div> 
     </div>
  </nav>

  </>
  )
}

export default NavBar