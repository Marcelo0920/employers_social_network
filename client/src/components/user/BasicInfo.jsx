import React from 'react';


const BasicInfo = () => {
    return(
        <div className="widget">
            <h4 className="widget-title">Información Básica</h4>
            <ul className="naves">
                <li>
                    <i className="ti-clipboard" />
                    <a href="newsfeed.html" title>Correo : marcelo0920.z@gmail.com</a>
                </li>
                <li>
                    <i className="ti-mouse-alt" />
                    <a href="inbox.html" title>Ubicación : Calle José Bustamante</a>
                </li>
                <li>
                    <i className="ti-files" />
                    <a href="fav-page.html" title>Teléfono : 74613450</a>
                </li>
                <li>
                    <i className="ti-user" />
                    <a href="timeline-friends.html" title>Página Web</a>
                </li>
            </ul>
        </div>
    )
}

export default BasicInfo;