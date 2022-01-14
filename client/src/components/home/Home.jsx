import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import admin2 from '../../images/resources/admin2.jpg';

import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import Post from '../post/Post';
import FriendsList from '../profile/FriendsList';
import Ad from '../profile/Ad';
import ShortCuts from './ShortCuts';
import Likers from '../user/Likers';
import RecentActivity from '../user/RecentActivity';
import NewPost from '../post/NewPost';
import TimeLine from '../profile/TimeLine';
import Ofertas from '../empresas/Ofertas';



const Home = () => {

    const home = ["timeline", "empresas", "ofertas"];
    const [myHome, setMyHome] = useState("timeline")

    return(
        <div>
          <div className="theme-layout">
    
    
            <Navbar />

          <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                      <div className="col-lg-3">
                        <aside className="sidebar static">
                          
                        <div className="widget">
                            <h4 className="widget-title">Shortcuts</h4>
                            <ul className="naves">
                                <li>
                                    <i className="ti-clipboard" />
                                    <a  title onClick={() => setMyHome("timeline")} >Ver mi muro</a>
                                </li>
                                <li>
                                    <i className="ti-mouse-alt" />
                                    <a title onClick={() => setMyHome("ofertas")} >Buscar Ofertas de Trabajo</a>
                                </li>
                                <li>
                                    <i className="ti-files" />
                                    <Link to = "/profile" title>Editar mi Perfil</Link>
                                </li>
                                <li>
                                    <i className="ti-user" />
                                    <a href="timeline-friends.html" title>Explorar Empresas</a>
                                </li>
                                <li>
                                    <i className="ti-image" />
                                    <a href="timeline-photos.html" title>Explorar Portal de Empleos</a>
                                </li>
                                <li>
                                    <i className="ti-video-camera" />
                                    <a href="timeline-videos.html" title>Ver mis solicitudes</a>
                                </li>
                            </ul>
                        </div>

                          <RecentActivity />

                       {/*    <Likers /> */}

                        </aside>
                      </div>{/* sidebar */}

                      {myHome === "timeline" && <TimeLine /> }
                      {/* {myHome === "empresas" && <Empresas /> } */}
                      {myHome === "ofertas" && <Ofertas /> }

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

        </div>
        
      </div>

    )
}

export default Home;