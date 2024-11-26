// import logo from './logo.svg';
import './App.css';

import './App.css';
import Firstpage from './FirstPage/Firstpage';
import UserLogin from './UserLogin/UserLogin';
import {Routes, Route } from 'react-router-dom';
import Ngologin from './Ngologin/Ngologin';
import UserSignin from './Usersignin/UserSignin';
import Mainpage from './Mainpage/Mainpage';
import Aboutpage from './Aboutpage/Aboutpage';
import Contact from './Contactpage/Contact';
import  AfterBookpage from './AfterBook/AfterBookpage';
import ChooseService from './AfterBook/ChooseService/ChooseService';
import  DonationDetails from './AfterBook/DonationDetails/DonationDetails';
import SchedulePickup from './AfterBook/SchedulePick/SchedulePickup';
import DonorVerify from './AfterBook/VerifyDonor/DonarVerify';
import PlaceOrder from './AfterBook/WPlaceOrder/PlaceOrder';
import Thank from './AfterBook/zThank/Thank';
import TeamThank from './Ngologin/TeamThank';
function App() {
  return (
    <>
      <Routes>
        <Route path="/sparkle" element={<Firstpage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignin" element={<UserSignin/>}/>
        <Route path="/ngologin" element={<Ngologin />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/afterbook" element={<AfterBookpage/>}/>
        <Route path="/choose" element={<ChooseService/>} />
        <Route path="/donatedetails" element={<DonationDetails />} />
        <Route path="/schedule" element={<SchedulePickup/>} />
        <Route path="/verify" element={<DonorVerify />} />
        <Route path="/place" element={<PlaceOrder />} />
        <Route path="/thank" element={<Thank/>} />
        <Route path="/teamthank" element={<TeamThank/>} />
      </Routes>
    
    </>
  );
}

export default App;