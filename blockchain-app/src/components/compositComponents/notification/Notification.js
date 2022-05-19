import React ,{useState}from 'react';
import './Notification.css'
function Notification(props){
    return(
        <div>
            <div className='row'>
                <h5 className='messages'>{props.message}</h5>
            </div>
        </div>
    )
}
export default Notification;