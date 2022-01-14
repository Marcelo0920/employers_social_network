import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


import AuthenticateMode from './AuthenticateMode';
import LoginEmpresa from './LoginEmpresa';

const Landing = ({isAuthenticated}) => {

    const [empresa, setEmpresa] = useState(true);

    function setLogin(){
        setEmpresa(!empresa);
    }
    
    //REDIRECT IF LOGGED IN

    if(isAuthenticated){
        return <Navigate to = "/" />
    }

    return(
        <Fragment>
            <div className="theme-layout">
                <div className="container-fluid pdng0">
                    <div className="row merged">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Red Social Descentralizada</h1>
                                <p>
                                Esta es una red social de trabajo que usa la tecnología de Blockchain! ;)
                                </p>
                                <div className="friend-logo">
                                <span><img src="../../images/wink.png" alt= "" /></span>
                                </div>
                                <a href="#" title className="folow-me">Síguenos en Facebook ;)</a>
                            </div>	
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <a  className='centrado' onClick={() => setLogin()} >Cambiar inicio de sesión</a>
                            <div className="login-reg-bg">
                                
                                {empresa === true && <AuthenticateMode /> }
                                {empresa === false && <LoginEmpresa /> }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);