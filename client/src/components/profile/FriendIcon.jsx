import React from 'react';

import avatar1 from '../../images/resources/friend-avatar.jpg';


const FriendIcon = () => {
    return(
        <li>
            <figure>
                <img src= {avatar1} alt />
                <span className="status f-online" />
            </figure>
            <div className="friendz-meta">
                <a href="time-line.html">bucky barnes</a>
                <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4136282f352433322e2d25243301262c20282d6f222e2c">[email&nbsp;protected]</a></i>
            </div>
        </li>
    )
}

export default FriendIcon;