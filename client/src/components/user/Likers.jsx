import React from 'react';

import LikerInfo from '../profile/LikerInfo';


const Likers = () => {
    return(
        <div className="widget stick-widget">
            <h4 className="widget-title">gente nueva a quien le caes bien</h4>
            <ul className="followers">
                <LikerInfo />
                <LikerInfo />
                <LikerInfo />
                <LikerInfo />
                <LikerInfo />
                <LikerInfo />
            </ul>
        </div>
    )
}

export default Likers;