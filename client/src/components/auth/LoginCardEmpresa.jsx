import React from 'react';
import { connect } from 'mongoose';
import { loginEmpresa } from '../../actions/auth';
import PropTypes from 'prop-types';

const LoginCardEmpresa = ({loginEmpresa}) =>{

    const [formData, setFormData] = useState({
        correo: '',
        password: ''
    })

    const {correo, password} = formData;

    const onSubmit = async e => {
        e.preventDefault();

        loginEmpresa(correo, password);
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return(
        <div className="log-reg-area sign">
            <h2 className="log-title">Iniciar sesión como Usuario</h2>
            <p>
            ¿Todavía no nos usas?<a href="#" title>Toma nuestro recorrido</a> o <a href="#" title>Únete ahora</a>
            </p>
            <form onSubmit = {e => onSubmit(e)}>
                <div className="form-group">	
                    <input 
                        type="text" 
                        id="input" 
                        required="required" 
                        name = 'correo'
                        value={correo}
                        onChange={e => onChange(e)}
                    />
                    <label className="control-label" htmlFor="input">Correo Electrónico</label><i className="mtrl-select" />
                </div>
                <div className="form-group">	
                    <input 
                        type="password" 
                        required="required" 
                        name = "password"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                    <label className="control-label" htmlFor="input">Contraseña</label><i className="mtrl-select" />
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" defaultChecked="checked" /><i className="check-box" />Recordarme.
                    </label>
                </div>
                <a href="#" title className="forgot-pwd">¿Olvidaste tu contraseña?</a>
                <button className="mtr-btn signin" type="submit" value= "login"><span>Iniciar Sesión</span></button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    loginEmpresa: PropTypes.func.isRequired
})

LoginCardEmpresa.propTypes = {
    loginEmpresa: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {loginEmpresa})(LoginCardEmpresa);