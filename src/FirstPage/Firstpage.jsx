import React  from 'react'
import './Firstpag.css'
import {useNavigate} from "react-router-dom";
import firstlogo from '../FirstPage/firstlogo.png';
// import frontbg from '../FirstPage/frontbg.jpg';
const Firstpage = () => {
   const navigate = useNavigate() 

  return (
    <>
  
      <div className='firstbag'> 

    <div className='wholecontentflex'>
    <div className="headshot ">
      <img className='headshot-3'src={firstlogo} alt='kk' />
    </div>
       <div className='buttonflex'>
         <button className='button-92' onClick={()=>{navigate("/usersignin")}}> For Donation  </button> 
        <button className='button-92' onClick={ ()=>{navigate("/ngologin")}}> Join Us To Serve</button>
      </div> 
      </div>
</div>

    </>
  )
  }

export default Firstpage;