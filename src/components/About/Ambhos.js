import React from 'react';
import Left from './AmbhosLeft/left';
import Right from './AmbhosRight/right';
import './ambhos.css';
function About()
{
    return (
        <div className="About row">
                <Left />
                <Right />
        </div>
    );
}
export default About;