import React from 'react';
import {Link} from 'react-router-dom';


const ShortCuts = () => {
    return(
        <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
                <li>
                    <i className="ti-clipboard" />
                    <Link to = "/profile" title>Ver mi Perfil</Link>
                </li>
                <li>
                    <i className="ti-mouse-alt" />
                    <Link to = "/ofertas" title>Buscar Ofertas de Trabajo</Link>
                </li>
                <li>
                    <i className="ti-files" />
                    <Link to = "profile" title>Editar mi Perfil</Link>
                </li>
                <li>
                    <i className="ti-user" />
                    <a href="timeline-friends.html" title>Explorar Empresas</a>
                </li>
                <li>
                    <i className="ti-image" />
                    <a href="timeline-photos.html" title>Explorar Empleos</a>
                </li>
                <li>
                    <i className="ti-video-camera" />
                    <a href="timeline-videos.html" title>Ver mis solicitudes</a>
                </li>
            </ul>
        </div>
    )
}

export default ShortCuts;