import React,{useState} from "react";
import './dashboard.css';
import CreateJackPot from "../../abstractComponents/createJackPot/jackpot";
import UpdateJackPot from "../../abstractComponents/updateJackPot/UpdateJackPot";
function Dashboard () {
    const [create,setCreate]=useState(false);
    const [update,setUpdate]=useState(false);
    const handleCreate=(event)=>{
      event.preventDefault();
        setCreate(true);
        setUpdate(false);
    }
    const handleUpdate=(event)=>{
      event.preventDefault();
        setUpdate(true);
        setCreate(false);
    }

  return (
    <div>
      <div style={{textAlign:'center'}}><h1>Admin Dashboard</h1></div>
      <div className="container">
        <div className="row buttons">
          <div className="col-6">
            <button className="button" onClick={handleCreate}> Create </button>
          </div>
          <div className="col-6">
              <button className="button" onClick={handleUpdate} > Update </button>
        </div>
        </div>
      </div>
      <div className="container">
          {create==true?<CreateJackPot/>:''}
          {update==true?<UpdateJackPot/>:''}
      </div>
    </div>
  );
};
export default Dashboard;
