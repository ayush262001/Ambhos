import React from 'react';
import './Left.css';
import Element from './GrowthElement/element';

function Left()
{
    return(
          <div className="Left">
                  <div className="Growth-section">
                <div className="circle">
                      
                </div>
     
     <Element EventName={"Plasma Donation"} EventDate = {"20/04/2021"} Message={"Donate plasma for required person"} URL={"http://bit.ly/plasma_ambhos"} />       </div>

            <div className="Growth-section">
                <div className="circle">
                
                </div>
                <Element EventName={"Blood Donation"} EventDate = {"12/02/2021"} Message={"Donate blood and save lifes"} URL={""} />
            </div>

            <div className="Growth-section">
                <div className="circle">
                
                </div>
                <Element EventName={"Self defense"} EventDate = {"07/03/2021"} Message={"Be your own support."} URL={""} />
            </div>

            <div className="Growth-section">
                <div className="circle">
                
                </div>
                <Element EventName={"Helping Hand"} EventDate = {"24/04/2021"} Message={"if you are a doctor. Join our community and help corona +ve"} URL={"https://forms.gle/F7MH72VL7jtx54yX6"} />
            </div>

          </div>
    );
}

export default Left;