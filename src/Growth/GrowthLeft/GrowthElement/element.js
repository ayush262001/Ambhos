import React from 'react';
import './element.css';

function Element({EventName, EventDate, Message, URL})
{
    return(
          <div className="element">
                    <div className="Event-Info">
                          <h2><a href={URL} className="color-change-kro">{EventName}</a></h2>
                          <h5>{EventDate}</h5>
                    </div>
                    <p className="mess"><a href={URL} className="color-change-kro">{Message}</a></p>
          </div>
    );
}

export default Element;