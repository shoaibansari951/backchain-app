import React from "react";
import "./UpdateJackPot.css";
import { useState } from "react";
function UpdateJackPot() {
    const [jackpotName, setJackpotName] = useState();
    const [jackpotEndDate, setJackpotEndDate] = useState();
    const handleUpdateJackPot=(event)=>{
        event.preventDefault();

    }
  return (
    <div className="jackpot">
      <div className="heading">
        <h4>Update Jack Pot</h4>
      </div>
      <form onSubmit={handleUpdateJackPot}>
        <div className="form-group form">
          <label className="mb-2">Name</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter Name"
            onChange={(event) => {
                setJackpotName(event.target.value);
            }}
          />
          <label className="mb-2">Enter Jack Pot End Date</label>
          <input
            type="date"
            className="form-control mb-4"
            placeholder="Enter End Date"
            onChange={(event) => {setJackpotEndDate(event.target.value)}}
          />
          <button className="createJackpot"> Update Jack Pot</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateJackPot;