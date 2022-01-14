import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const BasicInfo = ({auth}) => {
    return(
        <div className="widget">
            <h4 className="widget-title">Información Básica</h4>
            <ul className="naves">
                <li>
                    <i className="ti-clipboard" />
                    <a target="_blank" href="newsfeed.html" title>Correo : {auth.user.correo}</a>
                </li>
                <li>
                    <i className="ti-mouse-alt" />
                    <a href="inbox.html" target="_blank" title>Ubicación : {auth.user.ubicacion}</a>
                </li>
                <li>
                    <i className="ti-files" />
                    <a target="_blank" href="fav-page.html" title>Teléfono : {auth.user.telefono}</a>
                </li>
                <li>
                    <i className="ti-user" />
                    <a target="_blank" href="timeline-friends.html" title>Página Web : {auth.user.website}</a>
                </li>
            </ul>
        </div>
    )
}

BasicInfo.propTypes = ({
    auth: PropTypes.object.isRequired
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(BasicInfo);