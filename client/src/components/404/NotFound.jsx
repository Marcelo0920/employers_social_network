import React from 'react';
import backgroundImage from '../../images/resources/404.jpg'

const NotFound = () => {
    return(
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-page">
                            <div className="bg-image" style={{backgroundImage: `url(${backgroundImage})`}} />
                            <div className="error-meta">
                                <h1>whoops!</h1>
                                <span>we couldn't find that page </span>
                                <a href="index-2.html" title data-ripple>Go Back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;