import React from 'react';
import './whyus.css';
import face from '../Whyus/face.png';
import valued from '../Whyus/valued.png';
import reward from '../Whyus/reward.png';
import eco from '../Whyus/eco.png';
import eye from '../Whyus/eye.png';
const Whyus= () => {
  return (
    <>
    <div className='whybody'>
    <h1 className='h1why'>WHY DONATE THROUGH US</h1>
     <div className='container hwhy '>
     <div className="row row-cols-sm-3 row-cols-md-4 justify-content-md-evenly">
    <div className="col   ">
    <div className="card " >
  <img src={face} className="card-img-top imgg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Feel Good</h5>
    <p className="card-text">Donations brings smiles and spreads joy, making you feel happier and brighter inside.</p>
  
  </div>
</div>
    </div>
    <div className="col   ">
    <div className="card" >
  <img src="https://us.123rf.com/450wm/cosmaa/cosmaa2110/cosmaa211000048/175716320-vector-illustration-of-thumb-up-hand.jpg?ver=6" className="card-img-top imgg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Super Convinient</h5>
    <p className="card-text">
Donate reusable items right from the comfort of your home. Enjoy doorstep pickup and ensure your donations reach those in need directly.</p>
  
  </div>
</div>
    </div>
    <div className="col   ">
    <div className="card" >
  <img src={valued} className="card-img-top imgg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Your Donations are Valued</h5>
    <p className="card-text">
We ensure your donations reach those in need by delivering them directly into the hands of the beneficiaries.</p>
  
  </div>
</div>
    </div>
    <div className="col   ">
    <div className="card" >
  <img src={eye} className="card-img-top imgg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Transparent Process</h5>
    <p className="card-text">
Rest assured that your donations reach the beneficiaries intact through our verified and trusted partner NGOs, which are audited regularly for transparency and accountability.</p>
  
  </div>
</div>
    </div>
    <div className="col ">
    <div className="card">
  <img src={reward} className="card-img-top imgg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Get Surprise Rewards</h5>
    <p className="card-text">
We keep the joy alive by occasionally surprising you with our exclusive "happiness box," filled with delightful goodies and vouchers.</p>
  
  </div>
</div>
    </div>
    <div className="col ">
    <div className="card">
  <img src={eco} className="card-img-top imgg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Save Environment</h5>
    <p className="card-text"> 
Give your unwanted belongings a new lease on life and ensure they find their way into the hands of those who truly need them, keeping them out of landfills.</p>
  
  </div>
</div>
    </div>
  </div>
    </div>
</div>
    </>
  )
}
  

export default Whyus