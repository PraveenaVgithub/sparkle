import React,{useState} from 'react'
import BookNav from '../BookNav/BookNav'
import './DonationDetails.css';
import { useNavigate } from 'react-router-dom';
export const DonationDetails = () => {
  const navigate = useNavigate();
  const [tot,settot]=useState(0);
  const [eldtot,seteldtot]=useState(0);
  const [count, setCount] = useState(0);
   const handleAdd = () => {
    setCount(count + 1);
    settot(tot+1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);settot(tot-1);
    }
  };
  const [count1, setCount1] = useState(0);

  const handleAdd1 = () => {
    setCount1(count1 + 1); settot(tot+1);
  };

  const handleSubtract1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);settot(tot-1);
    }
  };
  const [count2, setCount2] = useState(0);

  const handleAdd2 = () => {
    setCount2(count2 + 1); settot(tot+1);
  };

  const handleSubtract2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);settot(tot-1);
    }
  };
  const [count3, setCount3] = useState(0);

  const handleAdd3 = () => {
    setCount3(count3 + 1); settot(tot+1);
  };

  const handleSubtract3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);settot(tot-1);
    }
  };
  const [count4, setCount4] = useState(0);

  const handleAdd4 = () => {
    setCount4(count4 + 1); settot(tot+1);
  };

  const handleSubtract4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);settot(tot-1);
    }
  };
  const [count5, setCount5] = useState(0);

  const handleAdd5 = () => {
    setCount5(count5 + 1); settot(tot+1);

  };

  const handleSubtract5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);settot(tot-1);
    }
  };
  // elder states
  const [cnt, setCnt] = useState(0);

  const Add = () => {
    setCnt(cnt + 1); seteldtot(eldtot+1);
  };

  const Subtract = () => {
    if (cnt > 0) {
      setCnt(cnt - 1);seteldtot(eldtot-1);
    }
  };
  const [cnt1, setCnt1] = useState(0);

  const Add1 = () => {
    setCnt1(cnt1 + 1); seteldtot(eldtot+1);
  };

  const Subtract1 = () => {
    if (cnt1 > 0) {
      setCnt1(cnt1 - 1);seteldtot(eldtot-1);
    }
  };const [cnt2, setCnt2] = useState(0);

  const Add2 = () => {
    setCnt2(cnt2 + 1); seteldtot(eldtot+1);
  };

  const Subtract2 = () => {
    if (cnt2 > 0) {
      setCnt2(cnt2 - 1);seteldtot(eldtot-1);
    }
  };
  const [cnt3, setCnt3] = useState(0);

  const Add3 = () => {
    setCnt3(cnt3 + 1); seteldtot(eldtot+1);
  };

  const Subtract3 = () => {
    if (cnt3 > 0) {
      setCnt3(cnt3 - 1);seteldtot(eldtot-1);
    }
  };
  const [cnt4, setCnt4] = useState(0);

  const Add4 = () => {
    setCnt4(cnt4 + 1); seteldtot(eldtot+1);
  };

  const Subtract4 = () => {
    if (cnt4 > 0) {
      setCnt4(cnt4 - 1);seteldtot(eldtot-1);
    }
  };
  const [cnt5, setCnt5] = useState(0);

  const Add5 = () => {
    setCnt5(cnt5 + 1); seteldtot(eldtot+1);
  };

  const Subtract5 = () => {
    if (cnt5 > 0) {
      setCnt5(cnt5 - 1);seteldtot(eldtot-1);
    }
  };
    return (
      <>

      <div className='ddbody'>
        <div className='container bg-transparent m-5'>
          <div className="row g-0 m-auto">
            <div className="col-6 col-md-4 " >  <BookNav/></div>
            <div className="col-sm-6 col-md-8   border ddmain">
            <div className="row m-auto ">
            <div className="col-6 childside">
            <div className="d-flex flex-column ">
            <div className="p-3 ddchead">
              <h3 className='ch3' >CHILDREN</h3>
            </div>
             <div className="p-2 d-flex ddsub">
             <h3>Clothes</h3> 
            <span className='d-flex ms-5  ddbutt' >
            <button onClick={handleSubtract}>-</button>
            <h5>{count}</h5>
            <button onClick={handleAdd}>+</button>
            </span>
             </div>
             <div className="p-2 d-flex ddsub ">
             <h3>Footwear</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={handleSubtract1}>-</button><h5>{count1}</h5><button onClick={handleAdd1}>+</button></span>
             </div>
             <div className="p-2 d-flex ddsub">
             <h3>Stationary</h3> 
            <span className='d-flex ms-5 ddbutt' ><button onClick={handleSubtract2}>-</button><h5>{count2}</h5><button onClick={handleAdd2}>+</button></span>
             </div>
            
            <div className="p-2 d-flex ddsub">
             <h3>Toys</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={handleSubtract3}>-</button><h5>{count3}</h5><button onClick={handleAdd3}>+</button></span>
             </div>
          
            <div className="p-2 d-flex ddsub">
             <h3>Furnitures</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={handleSubtract4}>-</button><h5>{count4}</h5><button onClick={handleAdd4}>+</button></span>
             </div>

            <div className="p-2 d-flex ddsub">
             <h3>Food</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={handleSubtract5}>-</button><h5>{count5}</h5><button onClick={handleAdd5}>+</button></span>
             </div>
            </div>
            <h2 className='m-4 text-center'>Total Children items  {tot}</h2>
             </div>



             {/* elders */}
             <div className="col-6 childside">
            <div className="d-flex flex-column ">
            <div className="p-3 ddchead">
              <h3 className='ch3'>ELDERS</h3>
            </div>
             <div className="p-2 d-flex ddsub">
             <h3>Clothes</h3> 
            <span className='d-flex ms-5  ddbutt' >
            <button onClick={Subtract}>-</button>
            <h5>{cnt}</h5>
            <button onClick={Add}>+</button>
            </span>
             </div>
             <div className="p-2 d-flex ddsub ">
             <h3>Footwear</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={Subtract1}>-</button><h5>{cnt1}</h5><button onClick={Add1}>+</button></span>
             </div>
             <div className="p-2 d-flex ddsub">
             <h3>Food</h3> 
            <span className='d-flex ms-5 ddbutt' ><button onClick={Subtract2}>-</button><h5>{cnt2}</h5><button onClick={Add2}>+</button></span>
             </div>
            
            <div className="p-2 d-flex ddsub">
             <h3>Blanket</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={Subtract3}>-</button><h5>{cnt3}</h5><button onClick={Add3}>+</button></span>
             </div>
          
            <div className="p-2 d-flex ddsub">
             <h3>Furnitures</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={Subtract4}>-</button><h5>{cnt4}</h5><button onClick={Add4}>+</button></span>
             </div>

            <div className="p-2 d-flex ddsub">
             <h3>Books</h3> 
            <span className='d-flex ms-5  ddbutt' ><button onClick={Subtract5}>-</button><h5>{cnt5}</h5><button onClick={Add5}>+</button></span>
             </div>
            </div>
            <h2 className='m-4 text-center'>Total Elders items {eldtot}</h2>
             </div>
          
             </div>


              </div>
            </div>
            </div>

            <div>
</div>
</div>
 <div className="row  ddnextbutt ">
  <div className="col-6 ms-5">
     <h6 >It will be so much useful for us if you pack each type of item seperately organized. </h6>
     <button onClick ={()=>{navigate("/schedule ")}}> Next</button>
  </div>
      </div>      


        </>
      )
}
export default DonationDetails;