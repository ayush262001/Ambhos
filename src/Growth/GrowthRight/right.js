import React from 'react';
import './right.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Right()
{
    return(

        <div className="rightCovid">
                 <h1>COVID</h1>
                 <h3>Donate your Plasma</h3>
                 <a href="http://bit.ly/plasma_ambhos">
                 <div className="ButtonRight">
                     <p>Click Here</p>
                     <div className="InsideButton">
                           <ArrowRightIcon />
                     </div>
                 </div>
                 </a>

                 
                 <h3>Book For vaccination now</h3>
                 <a href="https://selfregistration.cowin.gov.in/" >
                 <div className="ButtonRight">
                     <p>Click Here</p>
                     <div className="InsideButton">
                           <ArrowRightIcon />
                     </div>
                 </div>
                 </a>
        </div>

    );
}

export default Right;