import React from 'react';
import './partners.css';
import treck from './treck.jpg';
import Element from './partnersElement/partnersElement';
import p1 from './association-logo.png';

function Partners()
{
    return(
      <div className="partner-out-new">
      <h2>ASSOCIATION</h2>
      <div className="underline"></div>
      <div className="partners">
              <div className="insidePartner">
              <Element ImgGiven={p1} Heading={"Heading"} URL={"https://www.seasglobalschool.com/"}/>
              </div>
      </div>
      </div>
    );
}

export default Partners;