import React, {useState} from 'react';


import avatar10 from '../../images/friend-avatar10.jpg';

import page_1 from '../../images/resources/page1.jpg';

import user_post from '../../images/resources/user-post.jpg';
import comet_1 from '../../images/resources/comet-1.jpg';
import comet_2 from '../../images/resources/comet-2.jpg';
import comet_3 from '../../images/resources/comet-3.jpg';

import Comments from './Comments';

const Post = () => {

    const [viewComments, setViewComments] = useState(false);

    function showComments(){
        setViewComments(!viewComments);
    }

    return(
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src={avatar10} alt />
                    </figure>
                    <div className="friend-name">
                        <ins><a href="time-line.html" title>Janice Griffith</a></ins>
                        <span>published: june,2 2018 19:PM</span>
                    </div>
                    <div className="post-meta">
                        <img src= {user_post} alt />
                        <div className="we-video-info">
                        <ul>
                            <li>
                                <span className="views" data-toggle="tooltip" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                </span>
                            </li>
                            <li>
                                <span className="comment" data-toggle="tooltip" title="Comments" onClick={() => showComments()}>
                                    <i className="fa fa-comments-o" />
                                    <ins>52</ins>
                                </span>
                            </li>
                            <li>
                                <span className="like" data-toggle="tooltip" title="like">
                                    <i className="ti-heart" />
                                    <ins>2.2k</ins>
                                </span>
                            </li>
                            <li>
                                <span className="dislike" data-toggle="tooltip" title="dislike">
                                    <i className="ti-heart-broken" />
                                    <ins>200</ins>
                                </span>
                            </li>
                            <li className="social-media">
                                <div className="menu">
                                <div className="btn trigger"><i className="fa fa-share-alt" /></div>
                                <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-html5" /></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-facebook" /></a></div>
                                </div>
                                <div className="rotater">
                                <div className="btn btn-icon"><a href="#" title><i className="fa fa-google-plus" /></a></div>
                                </div>
                                <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-twitter" /></a></div>
                                </div>
                                <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-css3" /></a></div>
                                </div>
                                <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-instagram" /></a>
                                </div>
                            </div>
                            <div className="rotater">
                                <div className="btn btn-icon"><a href="#" title><i className="fa fa-dribbble" /></a>
                                    </div>
                                </div>
                                <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-pinterest" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <p>
                        Curabitur world's most beautiful car in <a href="#" title>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                    </p>
                </div>
            </div>
        </div>
        <div className="coment-area">

            {viewComments && <Comments /> }

                
            </div>
        </div>
        </div>
    )
}

export default Post;