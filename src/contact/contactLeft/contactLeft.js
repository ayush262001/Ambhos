import React from 'react';
import './contactLeft.css';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function contactLeft()
{
    return(
        <div className="ContactLeft">
             <CallIcon />
             <h4>Contact us</h4>
             <p>+91 | 6206407602</p>
             <p>+91 | 95085 14179</p>
             <hr/>

             <EmailIcon />
             <h4>Email Address</h4>
             <p className="email">connectwithus@ambhos.com</p>
        </div>
    );
}

export default contactLeft;