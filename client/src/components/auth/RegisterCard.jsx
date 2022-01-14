import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const RegisterCard = ({register}) => {


    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        password: '',
        password2: '',
        avatar: '',
        apellido: '',
        genero: '',
        ci: ''
    })

    const {nombre, correo, telefono, password, password2, avatar, ci, apellido, genero} = formData;


    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            console.log('Las contraseñas no coinciden!');
        }else{
            register({nombre, correo, telefono, password, avatar, ci, apellido, genero});
        }
    }

    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return(
        <Fragment>
                <div className="log-reg-area sign">
                    <h2 className="log-title">Regístrate</h2>
                    <p>
                    ¿Todavía no nos usas?<a href="#" title>Toma nuestro recorrido</a> o <a href="#" title>Únete ahora</a>
                    </p>
                    <form onSubmit= {e => {onSubmit(e)}}>
                        <div className="form-group">	
                            <input 
                                type="text" 
                                required="required" 
                                name = "nombre"
                                value={nombre}   
                                onChange={e => onChange(e)}
                            />
                            <label className="control-label" htmlFor="input">nombre</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input 
                                type="text" 
                                required="required"
                                name = "apellido" 
                                value={apellido}
                                onChange={e => onChange(e)}
                            />
                            <label className="control-label" htmlFor="input">Apellidos</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input 
                                type="text" 
                                required="required" 
                                name = "correo"
                                value={correo}
                                onChange={e => onChange(e)}
                            />
                            <label className="control-label" htmlFor="input">Correo Electrónico</label><i className="mtrl-select" />
                        </div>
                        <div className="form-group">	
                            <input 
                                type="text" 
                                required="required" 
                                name = "ci"
                                value={ci}
                                onChange={e => onChange(e)}
                            />
                            <label className="control-label" htmlFor="input">Carnet de Identidad</label><i className="mtrl-select" />
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
                        <div className="form-group">	
                            <input 
                                type="password" 
                                required="required" 
                                name = "password2"
                                value={password2}    
                                onChange={e => onChange(e)}
                            />
                            <label className="control-label" htmlFor="input">Repite tu Contraseña</label><i className="mtrl-select" />
                        </div>
                        <div className="form-radio">
                            <div className="radio">
                                <label>
                                <input 
                                    type="radio" 
                                    name="radio" 
                                    defaultChecked="checked" 
                                    value={genero}
                                    onChange={e => onChange(e)}
                                />
                                    <i className="check-box" />Masculino
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                <input 
                                    type="radio" 
                                    name="radio" 
                                    defaultChecked="checked" 
                                    value={genero}
                                    onChange={e => onChange(e)}
                                />
                                    <i className="check-box" />Femenino
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                <input 
                                    type="radio" 
                                    name="radio" 
                                    defaultChecked="checked" 
                                    value={genero}
                                    onChange={e => onChange(e)}
                                />
                                    <i className="check-box" />No binario
                                </label>
                            </div>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" defaultChecked="checked" /><i className="check-box" />Accept Terms &amp; Conditions ?
                            </label>
                        </div>
                        <a href="#" title className="already-have">¿Ya tienes una cuenta?</a>
                        <div className="submit-btns">
                            <button className="mtr-btn signup" type="submit"><span>Registrarme</span></button>
                        </div>
                    </form>
                </div>
            


         </Fragment>
    )
}

const mapStateToProps = state => ({

})

RegisterCard.propTypes = {
    register: PropTypes.func.isRequired
}


export default connect(mapStateToProps, {register})(RegisterCard);