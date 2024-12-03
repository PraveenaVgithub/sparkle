import React from 'react';
import './Aboutpage.css';
import NavBar from '../Mainpage/NavBar/NavBar';
const Aboutpage = () => {
  return (
   <>
  
  <div className='abtwhole'>
  <NavBar/>
  <div className="abthead">

        <h1>ABOUT US</h1>

        <p>SparkleShare offers a seamless solution for decluttering your home and breathing new life

             into neglected item. Donating your belongings to social organizations and recycling centers

            brings multifaceted benefits. Firstly, it supports noble causes, enhancing societal welfare.

            Secondly, responsible disposal aids environmental preservation by reducing landfill waste.

            Thirdly, decluttering fosters organization and promotes mental well-being.

            Experience the joy of spreading happiness through contributions.

     Let's team up with Sparkleshare to create a positive impact together.
    Continue to spread joy and remain happy!</p>

    </div>

    <div className="abtcontainer">

        <section className="about">

            <div className="about-image">

          <img src="https://cdn.givind.org/static/images/program/support-clothes-and-footwear-for-a-poor-orphan-child.jpg" alt='n'/>

            </div>

            <div className="about-content">

 

                <h2>OUR STORY</h2>

                <p>During my childhood, I witnessed my mother's tradition of donating clothes ,

                which sparked my curiosity about the practice's infrequency.

                 This led me to realize the disconnect between donors and NGOs,

                 stemming from a lack of awareness, trust issues, or logistical challenges.

                  Motivated by this realization, SPARKLESHARE emerged as a solution to bridge this gap

                  and facilitate seamless clothing donations between donors and NGOs.</p>

                 

            </div>

        </section>

    </div>
    </div>
   </>
  )
}

export default Aboutpage;