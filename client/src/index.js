import React from 'react';
import {render} from 'react-dom';
import App from './routes/App';

import "./css/main.min.css"
import "./css/strip.css"
import "./css/style.css"
import "./css/color.css"
import "./css/responsive.css"

import Home from './components/home/Home';
import NotFound from './components/404/NotFound';
import Profile from './components/user/Profile';
import Ofertas from './components/empresas/Ofertas';
import OfertaDetalle from './components/oferta/OfertaDetalle';

render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
