import React from 'react';
import {Navbar} from 'react-materialize' //porque desde el yarn lo instalé
import {Link} from "react-router-dom"
import './Header.css' //depende de la arquitectura del proyecto la forma de llamar cosas


const Header = () => {


    return (
      <div>
      <Navbar className ="Navbar" alignLinks="right">
        <Link to="/inicio">
          Inicio
        </Link>
        <Link to="/productos">
          Nuestros Productos
        </Link>
        <Link to="/organizaciones">
          Ventas institucionales
        </Link>
        <Link to="/contacto">
          Contáctanos
        </Link>
      </Navbar>

      </div>
    );


}

export default Header;
