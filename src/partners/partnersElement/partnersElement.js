import React from 'react';
import './partnersElement.css';

function PartnerElement({ImgGiven, URL})
{
    return(
        <div className="partner-element">
               <a href={URL}><img src={ImgGiven} alt=""></img></a>
        </div>
    );
}

export default PartnerElement;