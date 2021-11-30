import React from 'react';
import './selement.css';

function Selement({Icon, Title, Message, Image, Ids, linkSended})
{
    return(
         <div className="Selement">
                 <img src={Image} alt=""/>
                 <div className="social-inside">
                     <div className="social-name">
                     <a href={linkSended} className="social-anchortag">
                         <Icon className={Ids}/> </a>
                         <a href={linkSended} className="social-anchortag"> <h2>{Title}</h2></a>
                     </div>
                     <p>{Message}</p>
                     <a href={linkSended} className="ago">
                     <div className="go-here">
                         <p>Check profile</p>
                     </div>
                     </a>

                 </div>
         </div>
    );
}

export default Selement;