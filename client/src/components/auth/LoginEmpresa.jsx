import React, {Fragment, useState} from 'react';


const LoginEmpresa = () => {

    const [login, setLogin] = useState(true);

    return(
        <Fragment>
            {login === true && 
                <div className="log-reg-area sign">
                    <h2 className="log-title">Iniciar sesión como Empresa</h2>
                    <p>
                    Don’t use Winku Yet? <a href="#" title>Take the tour</a> or <a href="#" title>Join now</a>
                    </p>
                    <form method="post">
                        <div className="form-group">	
                            <input type="text" id="input" required="required" />
                            <label className="control-label" htmlFor="input">Username</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input type="password" required="required" />
                            <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" defaultChecked="checked" /><i className="check-box" />Always Remember Me.
                            </label>
                        </div>
                        <a href="#" title className="forgot-pwd">Forgot Password?</a>
                        <div className="submit-btns">
                            <button className="mtr-btn signin" type="button"><span>Login</span></button>
                            <button className="mtr-btn signup" type="button" onClick={() => setLogin(false)} ><span>Register</span></button>
                        </div>
                    </form>
                </div>
            }
            {login === false &&
                <div className="log-reg-area sign">
                    <h2 className="log-title">Register</h2>
                    <p>
                    Don’t use Winku Yet? <a href="#" title>Take the tour</a> or <a href="#" title>Join now</a>
                    </p>
                    <form method="post">
                        <div className="form-group">	
                            <input type="text" required="required" />
                            <label className="control-label" htmlFor="input">First &amp; Last Name</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input type="text" required="required" />
                            <label className="control-label" htmlFor="input">User Name</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input type="password" required="required" />
                            <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />
                        </div>
                        <div className="form-radio">
                            <div className="radio">
                                <label>
                                <input type="radio" name="radio" defaultChecked="checked" /><i className="check-box" />Male
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                <input type="radio" name="radio" /><i className="check-box" />Female
                                </label>
                            </div>
                        </div>
                        <div className="form-group">	
                            <input type="text" required="required" />
                            <label className="control-label" htmlFor="input"><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c29010d05002c">[email&nbsp;protected]</a></label><i className="mtrl-select" />
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" defaultChecked="checked" /><i className="check-box" />Accept Terms &amp; Conditions ?
                            </label>
                        </div>
                        <a href="#" title className="already-have" onClick={() => setLogin(true)}>Already have an account</a>
                        <div className="submit-btns">
                            <button className="mtr-btn signup" type="button"><span>Register</span></button>
                        </div>
                    </form>
                </div>
            }
         </Fragment>
        
    )
}

export default LoginEmpresa;