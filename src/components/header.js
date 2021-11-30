import React from 'react';
import './header.css';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function Header()
{
    return(
      <div className="header">
                <h2 className="name-ambo">AMBHOS</h2>
                <div className="navbar">
                    <a href="#" className="unactive" onClick="onClickedButton(0)">
                        <HomeIcon  className="icons" />
                        <h6>Home</h6>
                    </a>
                    <a href="#detail" className="unactive" onClick="onClickedButton(1)">
                        <InfoIcon  className="icons" />
                        <h6>About</h6></a>
                    
                        <a href="#services" className="unactive" onClick="onClickedButton(2)">
                        <BusinessCenterIcon className="icons"/>
                        <h6>Services</h6>
                    </a>
                    <a href="#success" className="unactive" onClick="onClickedButton(3)">
                        <TrendingUpIcon  className="icons" />
                        <h6>Events</h6>
                    </a>
                    <a href="#contact" className="unactive" onClick="onClickedButton(4)">
                        <ContactSupportIcon  className="icons" />
                        <h6>Support</h6>
                    </a>

                </div>
      </div>  
    );
}

function onClickedButton(el)
{
    var lis = document.getElementsByClassName("navbar").getElementsByTagName("a");
    for(let i=0; i < lis.length ;i++)
    {
            lis[i].className="unactive";
    }

    lis[el].className="active";
}

export default Header;