import React from 'react'
import Right from './right';
import './RightInside.css';

function RightInside({heading, subheading})
{
    return (
         <div className="inside">
                 <h2>{heading}</h2>
                 <p>{subheading}</p>
         </div>
    );
}

export default RightInside;