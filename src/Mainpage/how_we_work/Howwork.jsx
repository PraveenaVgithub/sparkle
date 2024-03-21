import React from 'react'
import './wework.css';
import work from '../images/work.jpg'
import deliverypic from '../images/deliverypic.jpg'
import gift from '../images/gift.jpg'
const How_we_work = () => {
  return (
    <>
    <div className='workbody'>
    <h1 className='h1mod'>HOW WE WORK </h1>
     <div className='container hw '>
     <div className="row row-cols-sm-3 row-cols-md-4 justify-content-md-evenly">
    <div className="col   ">
    <div className="card" >
  <img src={work} className="card-img-top imgg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Schedule a Pickup</h5>
    <p className="card-text">Please share your pickup location and preferred schedule, free of charge. Alternatively, you can select the drop-off option at no cost.</p>
  
  </div>
</div>
    </div>
    <div className="col ">
    <div className="card">
  <img src={deliverypic} className="card-img-top imgg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Donate at your Doorstep</h5>
    <p className="card-text">We will collect your donations from your doorstep during the selected time slot and transport them to the NGO.</p>
  
  </div>
</div>
    </div>
    <div className="col ">
    <div className="card">
  <img src={gift} className="card-img-top imgg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Rewards</h5>
    <p className="card-text"> Our brand partners express their gratitude to donors by offering surprise gifts as a token of appreciation for making a positive impact. 🎁✨.</p>
  
  </div>
</div>
    </div>
  </div>
    </div>
</div>
    </>
  )
}

export default How_we_work;