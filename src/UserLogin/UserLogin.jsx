import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';
import Backarrow from '../BackArrow/Backarrow';
import Indian_states_cities_list from "indian-states-cities-list";
// import axios from 'axios'
const UserLogin = () => {
         const [username, setUsername] = useState('');
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
         const [location, setLocation] = useState('');
         const [city, setCity] = useState('');
         const navigate = useNavigate();
         // Function to handle form submission backend
         const handleSubmit = (e) => {
           e.preventDefault();
           // You can perform any necessary validation here before submitting the form
           // For simplicity, let's just log the form data for now
           console.log({ username, email, password, location ,city});
         };
      // useEffect(() => { 
      //   async function getData(){
      //     const res = await axios.get(``)
      //   }
      // }
      // )
      const statearray = Indian_states_cities_list.INDIAN_STATES_AND_UT_ARRAY ;
      const cityarray =   Indian_states_cities_list.STATE_WISE_CITIES[location];
         console.log(statearray);
         console.log(Indian_states_cities_list.STATE_WISE_CITIES.AndhraPradesh);
        //  console.log(cityarray)
         return (
          <>
          <Backarrow/>
<div className="container gg">
  <div className="row " >

    <div className="col">
    <form onSubmit={handleSubmit} className='login'>
<div className="mb-2">
  <label htmlFor="username" className="form-label">Username:</label>
  <input 
    type="text" 
    className="form-control inplogin" 
    id="username" 
    value={username} 
    onChange={(e) => setUsername(e.target.value)} 
    required 
  />
</div>
<div className="mb-2">
  <label htmlFor="email" className="form-label">Email:</label>
  <input 
    type="email" 
    className="form-control inplogin" 
    id="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
    required 
  />
</div>
<div className="mb-2">
  <label htmlFor="password" className="form-label">Password:</label>
  <input 
    type="password" 
    className="form-control inplogin" 
    id="password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} 
    required 
  />
</div>
<div className="mb-3 ">
<label htmlFor="location" className="form-label"><span style={{ marginRight: '15px' }}>State:</span></label>
<select className="form-select form-select-sm" aria-label=".form-select-sm example" id="location" value={location} onChange={(e) => { setLocation(e.target.value) }}>
{statearray.map((item) => <option key={item} value={item}>{item}</option>)}
</select>


<div className="mb-3 ">
<label htmlFor="city" className="form-label"><span style={{ marginRight: '15px' }}>City:</span></label>
<select className="form-select form-select-sm" aria-label=".form-select-sm example" id="city" value={city} onChange={(e) => { setCity(e.target.value) }}>
{(cityarray || []).map((city) => (
<option key={city.value} value={city.value}>{city.label}</option>
))}
</select>
</div>


<button type="submit" className="btn loginbutt" onClick={()=>{navigate("/mainpage")}}><span class="loginbutt-content">Register</span></button>
</div>

</form> 
    </div>
  </div>
  </div>

       </>
         );
        };
      

export default UserLogin

