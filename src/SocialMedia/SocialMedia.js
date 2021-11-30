import React from 'react';
import './SocialMedia.css';
import SocialElement from './SocialElement/selement';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstaImg from './instagram1.png';
import LinkedInImg from './linkedin1 (2).png';
import YoutubeImg from './youtube1.png';

function SocialMedia()
{
    return(
        <div className="S-M">
              <SocialElement linkSended={"https://bit.ly/3e2vsef"} Icon={InstagramIcon} Title={"ambhos_official"} Message={"Let's connect let's spread....Spread INSTA awareness, fitness and love."} Image={InstaImg} Ids={"iconChangeInsta"}/>
              <SocialElement linkSended={"https://www.linkedin.com/company/ambhos"} Icon={LinkedInIcon} Title={"AMBHOS"} Message={"Let's connect and enhance it .Do connect with us on linkidin"} Image={LinkedInImg} Ids={"iconChangeLinkedin"}/>
              <SocialElement linkSended={"https://cutt.ly/JbfFdZb"} Icon={YouTubeIcon} Title={"AMBHOS"} Message={"Let's connect, Let's watch the Improved YOU of you in someone."} Image={YoutubeImg} Ids={"iconChangeYoutube"} />
        </div>
    );
}

export default SocialMedia;