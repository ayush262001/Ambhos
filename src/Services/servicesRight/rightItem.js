import React from 'react';
import './rightItem.css';

function Item({Icon, Title})
{
    return(
      
        <div className="item-right">
               <img src = {Icon}></img>
               <p>{Title}</p>
        </div>
        
    );
}

export default Item;