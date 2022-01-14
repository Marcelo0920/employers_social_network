import React from 'react';

import logo2 from '../../images/logo2.png';

const SecondNavbar = () => {
    return(
        <>        
            <div className="topbar transparent">
                <div className="logo">
                    <a title href="newsfeed.html"><img src= {logo2} alt /></a>
                </div>
                <div className="menu-container" id="toggle">
                    <a href="#" className="canvas-menu">
                    <i className="fa fa-times fa-bars" aria-hidden="true" /></a>
                </div>
            
            </div>
            <section>
                <div className="ext-gap bluesh high-opacity">
                    <div className="content-bg-wrap" style={{background: 'url(../../images/resources/animated-bg2.png)'}} />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top-banner">
                                    <h1>Detalle del Trabajo</h1>
                                    <nav className="breadcrumb">
                                        <a className="breadcrumb-item" href="index-2.html">Home</a>
                                        <span className="breadcrumb-item active">Career Detail</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default SecondNavbar;