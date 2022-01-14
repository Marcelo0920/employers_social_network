import React from 'react';

import NewPost from '../post/NewPost';
import Post from '../post/Post';


const TimeLine = () => {
    return(
        <div className="col-lg-6">
            <div className="loadMore">
                <NewPost />
                <Post />
                <Post />
            </div>
        </div>
    )
}


export default TimeLine;