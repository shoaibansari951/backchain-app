import React, { useState } from 'react';
// import React from 'react';
// import {useState} from 'react';

// import { useState, useEffect,useRef} from "react";
import { ethers } from "ethers";
// import './register.css'
import axios from 'axios'
import lotteryABI from '../../../contracts/lottery.json'
function AdminLogin() {
  // Declare a new state variable, which we'll call "count"
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [Response, setResponse] = useState('');
  const [notification, setNotification] = useState(false);
  const handleRegistration= async (event)=>{
    event.preventDefault();
    try
    {
        if(window.ethereum && window.ethereum.isMetaMask){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", []);
            const balance = await provider.getBalance(accounts[0]);
            const balanceInEther = ethers.utils.formatEther(balance);
            console.log('name',name);
            console.log('email',email);
            // const data= new FormData(event.target);
            axios.post(`http://localhost:5000/api/admin-login/${email}/${accounts[0]}`).then(res=>{
                setResponse(res.data);
                setNotification(true);
            });
        }
        else
        {
            // setWalletConnect(false);
        }        
    }
    catch(error)
    {
        console.log(error);
    }
}
  return(
    <div className='container'>
        <form onSubmit={handleRegistration}>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} title="please Enter Correct Email Address" required pattern=".+@gmail\.com" size="30" name="email" className="form-control input" placeholder="Enter Email" />
            </div>
            {/* <div className="form-group">
                <label >Name </label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}  required pattern="[a-zA-Z]*" className="form-control name input" name="name" id="exampleInputPassword1" placeholder="Name" />
            </div> */}
            {notification==true?<>{Response}</>:<></>}
            <button type="submit"  className="btn btn-primary" style={{ width:'100%' }}> Register </button>
        </form>
        {/* <button className="btn btn-primary" onClick={handleParticipate}>Connect Meta Mask</button> */}
    </div>
)
}

export default AdminLogin;