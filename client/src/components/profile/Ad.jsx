import React from 'react';

import book_icon from '../../images/book-icon.png';

const Ad = () => {
    return(
        <div className="widget">
            <div className="banner medium-opacity bluesh">
                <div style={{backgroundImage: 'url(images/resources/baner-widgetbg.jpg)'}} className="bg-image" />
                <div className="baner-top">
                    <span><img src= {book_icon} alt /></span>
                    <i className="fa fa-ellipsis-h" />
                </div>
                <div className="banermeta">
                    <p>
                        create your own favourit page.
                    </p>
                    <span>like them all</span>
                    <a href="#" title data-ripple>start now!</a>
                </div>
            </div>											
        </div>
    )
}


export default Ad;