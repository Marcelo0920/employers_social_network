import React, {Fragment, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../components/auth/Landing';
import NotFound from '../components/404/NotFound';
import Home from '../components/home/Home';
import Profile from '../components/user/Profile';
import OfertaDetalle from '../components/oferta/OfertaDetalle';
import PrivateRoute from '../components/routing/PrivateRoute';


//REDUX
import {Provider} from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

if(localStorage.token){
    setAuthToken(localStorage.token);
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home />} />
                    <Route exact path = "/profile" element = {<Profile/>} />
                    <Route exact path = "/login" element = {<Landing />} />
                    <Route path = "*" element = {<NotFound />} />
                    <Route path = "/ofertadetalle" element = {<OfertaDetalle />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

/* visualizar trabajadores que están trabajando, poner un botón para despedir
ver solicitudes de mis ofertas
visualizar trabajadores que ya no trabajan con la empresa
crear ofertas de trabajo */

/*despues del edit profile debería haber un CV */

export default App;