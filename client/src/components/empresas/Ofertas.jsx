import React from 'react';
import Oferta from '../oferta/Oferta';


const Ofertas = () => {
    return(
        <div className="col-lg-6 ">
            
            <Oferta salario={700} puesto={"Jefe de Seguridad Informática"} lugar={"Santa Cruz"} tiempo={4} />
            <Oferta salario={550} puesto={"Programador Junior"} lugar={"Beni"} tiempo={4}  />
            <Oferta salario={900} puesto={"Diseñador de Sistemas"} lugar={"Santa Cruz"} tiempo={3}  />
            <Oferta salario={400} puesto={"Auxiliar de ED2"} lugar={"Santa Cruz"} tiempo={4} />
            <Oferta salario={1000} puesto={"Programador Senior en React"} lugar={"La Paz"} tiempo={2} />
            <Oferta salario={765} puesto={"Programador Junior en Php"} lugar={"Santa Cruz"} tiempo={7} />
            <Oferta salario={500} puesto={"Programador de PHP simphony"} lugar={"Chuquisaca"} tiempo={1} />
            <Oferta salario={680} puesto={"Desarrollador FullStack"} lugar={"Santa Cruz"} tiempo={2} />
            
            <div className="col-lg-12">
                <button className="btn-view btn-load-more">Load More</button>
            </div>
        </div>

    )
}

export default Ofertas;