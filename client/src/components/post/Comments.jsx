import React from 'react';


import comet_1 from '../../images/resources/comet-1.jpg';

import MakeComment from './MakeComment';

const Comment = () => {
    return (
        <ul className="we-comet">
            <li>
                <div className="comet-avatar">
                    <img src= {comet_1} alt />
                </div>
                <div className="we-comment">
                    <div className="coment-head">
                        <h5><a href="time-line.html" title>Jason borne</a></h5>
                        <span>1 year ago</span>
                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                    </div>
                    <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                </div>
            </li>
            <MakeComment />
        </ul>
    )
}

export default Comment;