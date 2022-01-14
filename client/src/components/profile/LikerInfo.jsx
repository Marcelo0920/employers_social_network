import React from 'react';

import avatar2 from '../../images/resources/friend-avatar2.jpg';

const LikerInfo = () => {
    return(
        <li>
            <figure><img src= {avatar2} alt /></figure>
            <div className="friend-meta">
                <h4><a href="time-line.html" title>Kelly Bill</a></h4>
                <a href="#" title className="underline">Add Friend</a>
            </div>
        </li>
    )
}

export default LikerInfo;