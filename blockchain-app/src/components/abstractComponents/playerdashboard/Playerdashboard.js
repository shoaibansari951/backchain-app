import React, { useEffect } from "react";
import { useState } from "react";
import { ethers } from "ethers";
import './playerDashboard.css'
const lotteryABI = ["function enter(uint amount) public payable",
"function getPoolAmount() public view returns (uint)",
"function pickWinner() public onlyowner",
"function getPlayers() public view returns (address [] memory)",

];
function Playerdashboard() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [participant,setParticipant]=useState([]);
  const [contract,setContract]=useState();
  const [winner,setWinner]=useState()


  const participate = async (event) => {
    event.preventDefault();
    var provider;
    var accounts;
    var signer;
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        accounts = await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner(accounts[0]);
        const lottery = new ethers.Contract(
          "0xD73fF2f9558F611Be59aC4E2649765291e6cfE29",
          lotteryABI,
          signer
        );
        setContract(lottery);
        await lottery.enter(balance);
        //  const tx=await lottery.getPoolAmount();
        
        // console.log('participants :',await lottery.pickWinner());
        // console.log(lottery);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please install MetaMask");
    }
  };
  const getpollAmount = async (event) => {
  event.preventDefault();
  const tx=await contract.getPoolAmount();
  setAmount(Number(tx._hex));
  }
  const pickWinner = async (event) => {
  event.preventDefault();
  const tx=await contract.pickWinner();
  setWinner(tx);
  
  }
  const getparticipants = async (event) => {
  event.preventDefault();
  const tx=await contract.getPlayers();
  setParticipant(tx);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
           <div className="heading"> <h6> Participate In Jack Pot </h6> </div>
            <form className="form" onSubmit={participate}>
              <div className="form-group form">
                <label className="mb-2">Amount</label>
                <input
                  type="number"
                  required
                  className="form-control mb-4"
                  placeholder="Enter Amount"
                  onChange={(event) => setBalance(event.target.value)}
                />
                <button className="createJackpot"> Participate </button>
              </div>
            </form>
          </div>
          <div className="col-6 mt-4">
          <div className="heading01"> <h6> Poll Amount: </h6>
            <span>{amount}</span>
            <div className="pkwinner">
            <button onClick={getpollAmount} className="createJackpot"> View Poll Amount</button>
            </div>
           </div>
          </div>


        </div>
        <div className="row">
          <div className="col-6">
          <div className="heading01"> <h6> Participants </h6>
            <div className="pkwinner">
            <button onClick={getparticipants} className="createJackpot"> Get Participants </button>
            </div>
            <div>{participant.map(e=>{
              return(
                <ul>
                  <li>{e}</li>
                </ul>
                // <div>{e}</div>
              )
            })}</div>
           </div>          
          </div>
          <div  className="col-6">
          <div className="heading01"> <h6>  </h6>
            <span>{winner}</span>
            <div className="pkwinner">
            <button onClick={pickWinner} className="createJackpot"> Pick Winner</button>
            </div>
           </div>
          </div>
          <div/>
      </div>
    </div>
    </div>
  );
}
export default Playerdashboard;
