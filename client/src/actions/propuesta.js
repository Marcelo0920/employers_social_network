import axios from 'axios';
import {
    GET_PROPUESTAS,
    PROPUESTA_ERROR,
    DELETE_PROPUESTA,
    ADD_PROPUESTA,
    GET_PROPUESTA
    } from './types';


//GET PROPUESTAS
export const getPropuestas = () => async dispatch => {
    try {
        const res = await axios.get(`/api/propuestas`);
        dispatch({
            type: GET_PROPUESTAS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROPUESTA_ERROR,
            payload: {
                msg: err.response.statusText, 
                status: err.response.status
            }
        })
    }
}


//DELETE PROPUESTA
export const deletePropuesta = (id) => async dispatch => {
    try {
        await axios.delete(`api/propuestas/${id}`);

        dispatch({
            type: DELETE_PROPUESTA,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: PROPUESTA_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })   
    }
}


//ADD PROPUESTA
export const addPropuesta = formData => async dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/propuestas`);

        dispatch({
            type: ADD_PROPUESTA,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROPUESTA_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


//GET PROPUESTA
export const getPropuesta = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/propuestas/${id}`);

        dispatch({
            type: GET_PROPUESTA,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROPUESTA_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}