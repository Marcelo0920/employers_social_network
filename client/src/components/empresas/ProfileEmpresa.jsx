import React, {useState} from 'react';


const ProfileEmpresa = () => {

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
                                            <h5>Janice Griffith</h5>
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
    
                                    <Likers />
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
                                            <h4 className="widget-title">Friends</h4>
                                            <div id="searchDir" />
                                            <FriendsList />
                                
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
                <div className="side-panel">
                    <h4 className="panel-title">General Setting</h4>
                    <form method="post">
                    <div className="setting-row">
                        <span>use night mode</span>
                        <input type="checkbox" id="nightmode1" /> 
                        <label htmlFor="nightmode1" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Notifications</span>
                        <input type="checkbox" id="switch22" /> 
                        <label htmlFor="switch22" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Notification sound</span>
                        <input type="checkbox" id="switch33" /> 
                        <label htmlFor="switch33" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>My profile</span>
                        <input type="checkbox" id="switch44" /> 
                        <label htmlFor="switch44" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Show profile</span>
                        <input type="checkbox" id="switch55" /> 
                        <label htmlFor="switch55" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    </form>
                    <h4 className="panel-title">Account Setting</h4>
                    <form method="post">
                    <div className="setting-row">
                        <span>Sub users</span>
                        <input type="checkbox" id="switch66" /> 
                        <label htmlFor="switch66" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>personal account</span>
                        <input type="checkbox" id="switch77" /> 
                        <label htmlFor="switch77" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Business account</span>
                        <input type="checkbox" id="switch88" /> 
                        <label htmlFor="switch88" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Show me online</span>
                        <input type="checkbox" id="switch99" /> 
                        <label htmlFor="switch99" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Delete history</span>
                        <input type="checkbox" id="switch101" /> 
                        <label htmlFor="switch101" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    <div className="setting-row">
                        <span>Expose author name</span>
                        <input type="checkbox" id="switch111" /> 
                        <label htmlFor="switch111" data-on-label="ON" data-off-label="OFF" />
                    </div>
                    </form>
                </div>
            </div>
    
    )
}

export default ProfileEmpresa;