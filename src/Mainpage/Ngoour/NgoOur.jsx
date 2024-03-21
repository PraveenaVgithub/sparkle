import React from 'react';
import './ngoour.css';
import accept from '../Ngoour/accept.jpg';
import idea from '../Ngoour/idea.png';
import lovedale from '../Ngoour/lovedale.png';
import mira from '../Ngoour/mira.png';
import sneh from '../Ngoour/sneh.png';

const NgoOur = () => {
    return (
        <>
         <div className='ngoourwhole' >
         <div className="d-flex flex-column ">
       <h1 className='ngoourh1'>OUR PARTNERS</h1>
      <div className="ngoourimgbody">
      <div className="row row-cols-sm-3 row-cols-md-4 justify-content-md-evenly m-5  ngoour">
      <div className="col-6 col-md-4">
      <div className="card" >
      <img className="card-img-top" src={accept} alt="Card ie cap"/>
      <div className="card-body">
        <p className="card-text">ACCEPT SOCIETY</p>
      </div>
    </div>
      </div>
      <div className="col-6 col-md-4"> <div className="card" >
      <img className="card-img-top" src={lovedale} alt="Card im cap"/>
      <div className="card-body">
        <p className="card-text">LOVEDALE FOUNDATION</p>
      </div>
    </div></div>
      <div className="col-6 col-md-4"><div className="card" >
      <img className="card-img-top" src={mira} alt="Card  cap"/>
      <div className="card-body">
        <p className="card-text">MIRACLE FOUNDATION</p>
      </div>
    </div>
    </div>
      <div className="col-6 col-md-4"><div className="card" >
      <img className="card-img-top" src={idea} alt="Card  cap"/>
      <div className="card-body">
        <p className="card-text">IDEA FOUNDATION</p>
      </div>
    </div>
    </div>
      <div className="col-6 col-md-4"><div className="card" >
      <img className="card-img-top" src={sneh}alt="Card ige cap"/>
      <div className="card-body">
        <p className="card-text">SNEHALAYA HOME OF LOVE</p>
      </div>
    </div>
    </div>
    </div>
    
    
    
      </div>
     
        </div>
    
         </div>
        </>
      )
    }

export default NgoOur