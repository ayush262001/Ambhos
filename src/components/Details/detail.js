import React from 'react';

import DetailRight from './detailRight';
import DetailLeft from './detailLeft';
import './detail.css';

function Detail()
{
    return (
         <div className="detail" id="detail">
                <DetailLeft />
                <DetailRight />
         </div>
    );
}

export default Detail;