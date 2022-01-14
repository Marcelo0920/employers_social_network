import React from 'react';

import comet_1 from '../../images/resources/comet-1.jpg';


const MakeComment = () => {
    return(
        <li className="post-comment">
            <div className="comet-avatar">
                <img src={comet_1} alt />
            </div>
            <div className="post-comt-box">
                <form method="post">
                    <textarea placeholder="Post your comment" defaultValue={""} />
                    <button type="submit" />
                </form>	
            </div>
        </li>
    )
}

export default MakeComment;