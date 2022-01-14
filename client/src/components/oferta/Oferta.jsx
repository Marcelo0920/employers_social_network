import React from 'react';
import { Link } from 'react-router-dom';


const Oferta = ({puesto, lugar, salario, tiempo}) => {
    return(
        <div className="">
            <div className="open-position">
                <h4><Link to = "/ofertadetalle" title>{puesto}</Link></h4>
                <a href="#" title className='espaciado'><i className="fa fa-map-marker" />{lugar}</a>
                <a href="#" title className='espaciado'><i className="fa fa-map-marker" />{salario}$</a>
                <a href="#" title className='espaciado'><i className="fa fa-map-marker" />{tiempo} mes(es)</a>
            </div>
        </div>
    )
}

export default Oferta;