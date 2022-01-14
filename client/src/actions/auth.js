import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    USER_LOADED,
    EMPRESA_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    CLEAR_PROFILE,
    UPDATE_AVATAR,
    UPDATE_COVER
} from './types';

import setAuthToken from '../utils/setAuthToken';

//LOAD USER
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//LOAD EMPRESA
export const loadEmpresa = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/authEmpresa');

        dispatch({
            type: EMPRESA_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//REGISTER EMPRESA
export const registerEmpresa = ({nombre, correo, telefono, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({nombre, correo, telefono, password});
    try {
        const res = await axios.post('/api/empresas', body, config);

        dispatch(loadEmpresa());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            console.log('error registering empresa');
        }

        dispatch({
            type: REGISTER_FAILED
        })
    }
}

//REGISTER USER
export const register = ({nombre, apellido, correo, teléfono, password, avatar, ci}) => async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({nombre, apellido,correo, teléfono, password, avatar, ci})
    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            console.log('error registering user')
        }

        dispatch({
            type: REGISTER_FAILED
        })
    }
}

//UPDATE AVATAR PHOTO



//UPDATE COVER PHOTO

//LOGIN EMPRESA
export const loginEmpresa = (correo, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({correo, password});

    try {
        const res = await axios.post('/api/authEmpresa', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            console.log('error logging empresa')
        }
        dispatch({
            type: LOGIN_FAILED
        })
    }
}


//LOGIN USER
export const login = (correo, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({correo, password});

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            
        }
        dispatch({
            type: LOGIN_FAILED
        })
    }
}


//LOGOUT CLEAR PROFILE

export const logout = () => dispatch => {
    dispatch({type: CLEAR_PROFILE});
    dispatch({type: LOGOUT});
}
