import React, {useState} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import timeline_1 from "../../images/resources/timeline-1.jpg";
import user_avatar from "../../images/resources/user-avatar.jpg";
import TimeLine from '../profile/TimeLine';
import EditProfile from '../profile/EditProfile';
import Ad from '../profile/Ad';
import Navbar from '../navbar/Navbar';
import SocialLinks from './SocialLinks';
import BasicInfo from './BasicInfo';
import RecentActivity from './RecentActivity';
import Footer from '../Footer/Footer';




const Profile = ({auth}) => {

    const Page = ["TimeLine", "EditProfile"];
    const [myPage, setMyPage] = useState("TimeLine");


    return(
        <div>
        <div className="theme-layout">
            {/* responsive header */}
            <Navbar />
                {/* topbar */}	
                <section>
                <div className="feature-photo">
                    <figure><img src= {timeline_1} alt /></figure>
                    <div className="add-btn">
                        <span>1205 followers</span>
                        <a href="#" title data-ripple>Add Friend</a>
                    </div>
                    <form className="edit-phto">
                        <i className="fa fa-camera-retro" />
                        <label className="fileContainer">
                            Edit Cover Photo
                            <input type="file" />
                        </label>
                    </form>
                    <div className="container-fluid">
                        <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                                <div className="user-avatar">
                                    <figure>
                                    <img src= {user_avatar} alt />
                                    <form className="edit-phto">
                                        <i className="fa fa-camera-retro" />
                                        <label className="fileContainer">
                                        Edit Display Photo
                                        <input type="file" />
                                        </label>
                                    </form>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                                <div className="timeline-info">
                                    <ul>
                                    <li className="admin-name">
                                        <h5>{auth.user.nombre}{' '}{auth.user.apellido}</h5>
                                        <span>Group Admin</span>
                                    </li>
                                    <li>
                                        {
                                            Page.map(Navegacion => (
                                                <a className="active" title data-ripple onClick={() => setMyPage(Navegacion)}>
                                                    {Navegacion}
                                                </a>
                                            ))
                                        }
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>{/* top area */}
                <section>
                <div className="gap gray-bg">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="row" id="page-contents">
                            <div className="col-lg-3">
                            <aside className="sidebar static">
                                <SocialLinks />

                                <BasicInfo />

                                <RecentActivity />

                              {/*   <Likers /> */}
                                {/* recent activites */}
                                {/* who's following */}
                            </aside>
                            </div>{/* sidebar */}
                            {myPage === "TimeLine" && <TimeLine />}
                            {myPage === "EditProfile" && <EditProfile /> }

                            {/* centerl meta */}
                            <div className="col-lg-3">
                                <aside className="sidebar static">
                                    <Ad />

                                    <div className="widget friend-list stick-widget">
                                       {/*  <h4 className="widget-title">Friends</h4> */}
                                        <div id="searchDir" />
                                        {/* <FriendsList /> */}
                            
                                    </div>{/* friends list sidebar */}
                                </aside>
                            </div>{/* sidebar */}
                        </div>	
                        </div>
                    </div>
                    </div>
                </div>	
                </section>
                
                <Footer />
                
                {/* footer */}
                
            </div>
        </div>

    )
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Profile);