import React, {Fragment, useState} from 'react';


import Login from './Login';
import LoginEmpresa from './LoginEmpresa';

const Landing = () => {

    const [empresa, setEmpresa] = useState(true);

    function setLogin(){
        setEmpresa(!empresa);
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
                                
                                {empresa === true && <Login /> }
                                {empresa === false && <LoginEmpresa /> }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;