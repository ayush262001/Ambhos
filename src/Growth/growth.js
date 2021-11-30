import React from 'react';
import './growth.css';
import Left from './GrowthLeft/Left';
import Right from './GrowthRight/right';

function Growth()
{
    return(
        <div className="Growth" id="success">

           <Left />
           <Right/>

        </div>
    );
}

export default Growth;