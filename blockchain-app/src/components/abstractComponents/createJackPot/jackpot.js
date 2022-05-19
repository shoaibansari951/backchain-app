import react from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import './jackpot.css';
import axios from 'axios';
import Notification from '../../compositComponents/notification/Notification';
import moment from 'moment';
// import lotteryABI from '../../../contracts/lottery.json';

const CreateJackPot = (props) => {

    const lotteryABI=[
        "function createJackpot() public",
        "function getWinnerByLottery(uint lottery) public view returns (address payable)",
        "function getLotteryId() public view returns (uint)"
    ]
    const [value, setValue] = useState();
    const [jackpot, setJackpot] = useState();
    const [Response, setResponse] = useState('');
    const [notification, setNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(false)
    const setDateAndTime = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    const showDate = async (event) => {

        event.preventDefault();
        var provider;
        var accounts;
        var signer;
        try{
            provider = new ethers.providers.Web3Provider(window.ethereum)
            // provider= ethers.providers.getDefaultProvider('rinkeby');
            accounts = await provider.send("eth_requestAccounts", []);
            signer = await provider.getSigner(accounts[0]);
            console.log(signer);
            console.log('abi',lotteryABI);
            const lottery= new ethers.Contract('0xD73fF2f9558F611Be59aC4E2649765291e6cfE29',lotteryABI,signer);
            
            let id = await lottery.getLotteryId();

            try{
                var date01=moment(value).format('YYYY-MM-DD');
            }catch(err){
                console.log('err',err);
            }
            
            console.log('date01',date01);
            console.log('date',value);
            // const d = new Date(date).toISOString();
          axios.post(`http://localhost:5000/api/jackpot/${id}/${jackpot}`).then(async( res)=>{
              console.log('response :',res.data.message);
              if(res.data.message==='buttondisable'){
                  setNotification(true);
                  setNotificationMessage(true);
                }
                else if(res.data.message==='buttonable'){
                    await lottery.createJackpot();
                    setNotification(true);
                    setNotificationMessage(false);
                }
                // setResponse(res.data);
                // setNotification(true);
            }).catch(err=>{
                console.log(err);
            })
            setTimeout(() => {
                setNotification(false)
            }, 2000);
            // axios.post(`http://localhost:5000/api/jackpot/${lotteryId}`).then(res=>{
            // }).catch(err=>{
            //     console.log(err);
            // })
        }
        catch(err) {

        }
        

    }
    return (<div className='jackpot'>
        <div className='heading'><h4> Create Jack Pot</h4></div>
        {notification==true?<Notification message={Response} />:<></>}
        <form onSubmit={showDate} >
            <div className="form-group form">
                <label className='mb-2'>Name</label>
                <input type="text" onChange={(e)=>{setJackpot(e.target.value)}} required className="form-control mb-4" placeholder="Enter Name" />
                {/* <label className='mb-2'>Enter Jack Pot End Date</label>
                <input type="date" onChange={(e)=>{setValue(e.target.value)}} name="date" required className="form-control mb-4"  placeholder="Enter End Date"  /> */}
                {setNotificationMessage==true?<button disabled={true} className='createJackpot'> Create Jack Pot</button>:<button  className='createJackpot'> Create Jack Pot</button>}
            </div>
            </form>
        {/* <input onChange={setDateAndTime} type="date"/>
        <button onClick={showDate}>Submit</button> */}
        </div>
        )}
export default CreateJackPot;