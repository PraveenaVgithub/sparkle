import React from 'react'
import {useNavigate} from "react-router-dom";

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './ngo.css';
import  { useState } from 'react';
import Backarrow from '../BackArrow/Backarrow'
const Ngologin = () => {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collaborationOption: '',
    requirement: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
   <>
   
   <div className='ngobg'>
   <Backarrow/>
      <div className='container ngobody'>
      <div class="row g-5">
  <div class="col-12 col-sm-6  ngoimg "><img alt="7y" src='https://img.freepik.com/free-vector/cartoon-world-humanitarian-day-illustration_23-2148996147.jpg?w=740&t=st=1710612308~exp=1710612908~hmac=33c2d247e0a69ee5a387c635ff1d6c68cdecf8b73248fe4d3d6cd518774356bf'/></div>
  <div class=" col ngoform ">
  <Container>
      <Row >
        <Col xs={12} md={8} lg={6}>
          <div className="login-form">
         
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Work Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your work email"
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Form.Group controlId="collaborationOption">
                <Form.Label>Choose Collaboration Option:</Form.Label>
                <Form.Control
                  as="select"
                  name="collaborationOption"
                  value={formData.collaborationOption}
                  onChange={handleInputChange}
                >
                  <option value="1">Select an option</option>
                  <option value="3">Donation Pickup Driver</option>
                  <option value="5">   NGO Collaboration</option>
                  <option value="7">Trust Collaboration</option>
                  <option value="8"> Donate Surplus Stock</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="requirement">
                <Form.Label>Your Requirement:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your requirements"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block onClick={()=>{navigate('/teamthank')}}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
 </div>
</div>

</div>




   
   </>
  )
}

export default Ngologin