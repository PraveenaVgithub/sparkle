import React from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "./booknav.css";
const BookNav = () => {

  return (
    <>
      <div className="bgpic">
      <div className="d-flex flex-column  mb-3   flex-sm-row bookbox ">
        
          <div className="p-3 m-2 imgbg">
          
            <NavLink
              to="/choose"
              className="textdec"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
                backgroundColor: isActive ? "	rgb(0, 255, 230)" : "#fff",
                padding: isActive ? "12px" : "0",
                borderRadius: isActive ? "40% 10%" : "0",
              })}
            >
              Choose Service
            </NavLink>
          </div>
          <div className="p-3  m-2 imgbg">
            <NavLink
              to="/donatedetails"
              className="textdec"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
                backgroundColor: isActive ? "	rgb(0, 255, 230)" : "#fff",
                padding: isActive ? "3px" : "0",
                borderRadius: isActive ? "40% 10%" : "0",
              })}
            >
              Donation Details
            </NavLink>
          </div>
          <div className="p-3  m-2  imgbg">
            <NavLink
              to="/schedule"
              className="textdec"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
                backgroundColor: isActive ? "	rgb(0, 255, 230)" : "#fff",
                padding: isActive ? "7px" : "0",
                borderRadius: isActive ? "40% 10%" : "0",
              })}
            >
              Schedule Pickup
            </NavLink>
          </div>
          <div className="p-3  m-2 imgbg">
            <NavLink
              to="/verify"
              className="textdec"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
                backgroundColor: isActive ? "	rgb(0, 255, 230)" : "#fff",
                padding: isActive ? "3px" : "0",
                borderRadius: isActive ? "40% 10%" : "0",
              })}
            >
              Donar Verification
            </NavLink>
          </div>
          <div className="p-3  m-2  imgbg">
            <NavLink
              to="/place"
              className="textdec"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
                backgroundColor: isActive ? "	rgb(0, 255, 230)" : "#fff",
                padding: isActive ? "12px" : "0",
                borderRadius: isActive ? "40% 10%" : "0",
              })}
            >
              Place Order
            </NavLink>
          </div>
          <img
            className=" belowimg mt-4"
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5MS1hLTIyLWFfMS5wbmc.png"
            alt="cute"
          />
        </div>
      </div>
    </>
  );
};

export default BookNav;
