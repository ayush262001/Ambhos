import React from 'react';
import './detailLeft.css';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

function DetailLeft()
{
    return(
         <div className="detail-left">
                  <h2>Who We Are</h2>
                  <div className="line"></div>

                  <h4>Ambhos- The spirit to heal, the spirit to care!</h4>
                  <p>
                  We lend our services in the healthcare sector, acting as a mediator between you and your good health. We work with a vision of Fit India- a country where everyone is motivated to be physically and mentally sound and is inspired to be the best version of themselves. Through our website we aim to eradicate diseases by conducting surveys on public health issues, spreading awareness about them and providing updates about the related guidelines, schemes and campaigns launched by the government.
                  </p>

                  <a href="https://ambhos.blogspot.com/">
                  <div className="button">
                      <p >READ MORE </p>
                      <ChevronRightRoundedIcon  className="right-button"/>
                  </div>
                  </a>
         </div>
    );
}
export default DetailLeft;