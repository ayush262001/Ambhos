import React from 'react';
import './contactRight.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BookIcon from '@material-ui/icons/Book';

function ContactRight()
{
    return(
        <div className="right-contact">
                <div className="details-right">
                    <a href="https://www.linkedin.com/company/ambhos"><LinkedInIcon /></a>
                    <a href="https://www.linkedin.com/company/ambhos">Linkedin</a>
                </div>
                <div className="details-right">
                    <a href="https://bit.ly/3e2vsef"><InstagramIcon /></a>
                    <a href="https://bit.ly/3e2vsef">Instagram</a>
                </div>
                <div className="details-right">
                    <a href="https://cutt.ly/JbfFdZb"><YouTubeIcon /></a>
                    <a href="https://cutt.ly/JbfFdZb">Youtube</a>
                </div>
                <div className="details-right">
                    <a href="https://ambhos.blogspot.com/"><BookIcon /></a>
                    <a href="https://ambhos.blogspot.com/">Blog</a>
                </div>
        </div>
    );
}

export default ContactRight;