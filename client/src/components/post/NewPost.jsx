import React from 'react';


import admin2 from '../../images/resources/admin2.jpg';

const NewPost = () => {
    return(
        <div className="central-meta item">
            <div className="new-postbox">
                <figure>
                    <img src= {admin2} alt />
                </figure>
                <div className="newpst-input">
                    <form method="post">
                        <textarea rows={2} placeholder="write something" defaultValue={""} />
                        <div className="attachments">
                            <ul>
                                <li>
                                    <i className="fa fa-music" />
                                    <label className="fileContainer">
                                        <input type="file" />
                                    </label>
                                </li>
                                <li>
                                    <i className="fa fa-image" />
                                    <label className="fileContainer">
                                        <input type="file" />
                                    </label>
                                </li>
                                <li>
                                    <i className="fa fa-video-camera" />
                                    <label className="fileContainer">
                                        <input type="file" />
                                    </label>
                                </li>
                                <li>
                                    <i className="fa fa-camera" />
                                    <label className="fileContainer">
                                        <input type="file" />
                                    </label>
                                </li>
                                <li>
                                    <button type="submit">Publish</button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPost