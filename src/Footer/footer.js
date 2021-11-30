import React from 'react';
import './footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BookIcon from '@material-ui/icons/Book';

function Footer()
{
    return(
         <div className="Footer-section">
                  <p className="footer-para"> Copyright &copy; 2021 </p>
                  <p className="address"> 595, LOHIA NAGAR, BHARAMPURI, DEHRADUN, UTTARAKHAND-248171</p>
                  <div className="hide-div">
                         <a href="https://www.linkedin.com/company/ambhos" className="afoot"><LinkedInIcon className="icons-footer" /></a>
                         <a href="https://bit.ly/3e2vsef" className="afoot"><InstagramIcon className="icons-footer" /></a>
                         <a href="https://cutt.ly/JbfFdZb" className="afoot"><YouTubeIcon className="icons-footer" /></a>
                         <a href="https://ambhos.blogspot.com/" className="afoot"><BookIcon className="icons-footer" /></a>
                  </div>
         </div>
    );
}

export default Footer;