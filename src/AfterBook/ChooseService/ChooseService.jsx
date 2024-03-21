import React from 'react'
import BookNav from '../BookNav/BookNav'
import './chooseservice.css';
import { Form, Button } from 'react-bootstrap';
import  {  useState } from "react";
import { useNavigate } from 'react-router-dom';

const ChooseService=()=>{
  const navigate = useNavigate() ;
  const [add, setAdd] = useState('');
 
  const handleAutoDetectLocation = () => {
    console.log("Fetching location on button click...");
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      console.log("Latitude:", latitude, "Longitude:", longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("Fetched address data:", data);
          setAdd(data.address);
        })
        .catch(error => {
          console.error("Error fetching address:", error);
        });
    });
  };

  console.log("Rendered address:", add);

  return (
    <>

      <div className='choosebody'>
        <div className='container bg-transparent m-5'>
          <div className="row g-0 m-auto">
            <div className="col-6 col-md-4 " >  <BookNav/></div>
            <div className="col-sm-6 col-md-8  border chooseform">
              <div className="choosetexts m-5 text-center ">
                <h2>Help Us With Your Exact Location</h2>
                <p>This allows us to check if your area is within our coverage</p></div>
                <Form>
                  <Form.Group className="mb-3" controlId="locationForm.buildingName">
                    <Form.Label>Building name</Form.Label>
                    <Form.Control type="text" placeholder="Enter building name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="locationForm.blockNumber">
                    <Form.Label>Block #</Form.Label>
                    <Form.Control type="number" placeholder="Enter block number" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="locationForm.area">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="text" placeholder="Enter area" />
                  </Form.Group>

                  <Button className='choosebt' onClick={handleAutoDetectLocation}>
                    Auto-Detect Location
                  </Button>

                </Form>
                {/* Display add.road if it's available */}
                {Object.entries(add).map(([key, value]) => (
  <span key={key}>
     {value}, 
  </span>
))}
<button className='nextbutt' onClick ={()=>{navigate("/donatedetails ")}}> Next</button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default ChooseService;