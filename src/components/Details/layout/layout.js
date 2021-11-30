import React from 'react';
import './layout.css';

function Layout({Id, Icon, Title, Content})
{
    return(
         <div className={Id}>
                 <img src={Icon} alt=""/>
                 <h4>{Title}</h4>
                 <p className="content">{Content}</p>
         </div>
    );
}

export default Layout;