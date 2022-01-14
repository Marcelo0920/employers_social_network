import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    CLEAR_PROFILE
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
