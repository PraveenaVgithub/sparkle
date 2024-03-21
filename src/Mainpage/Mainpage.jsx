import React from 'react'
import './mainpage.css';
import NavBar from './NavBar/NavBar';
import How_we_work from './how_we_work/Howwork';
import { useNavigate } from 'react-router-dom';
import Things from './Things_donate/Things';
import Whyus from './Whyus/Whyus';
import NgoOur from './Ngoour/NgoOur';
const Mainpage = () => {
  const navigate =useNavigate();
  return (
    <>
    <div className=" bodymain" >
     <NavBar/>
  <div className="d-flex flex-column align-items-center quote">
    <h1 className='mb-4'>Helping hands ,<br/><span>happy hearts & sparkling eyes</span> </h1>
    <h3 className='mb-5'>From your Heart, to those in Need</h3>
    <button className=" button-52" onClick={()=>{navigate("/choose")}}>book a pickup <span class="material-symbols-outlined">volunteer_activism</span></button>
  </div>
  <How_we_work/>
  <Things/>
  <Whyus/>
  <NgoOur/>
</div>

    </>
  );
};

export default Mainpage;