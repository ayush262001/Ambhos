import React from 'react';
import one from './circle1.png';
import two from './circle2.png';
import three from './circle3.png'
import './left.css';



function Left()
{
    return (
        <div className="left">
                <div className="left-top"><img src={one} alt=""></img></div>
                
                <div className="left-bottom">
                    <img src={three} alt=""></img>
                    <img src={two} alt=""></img>
                </div>
        </div>
    );
}
export default Left;