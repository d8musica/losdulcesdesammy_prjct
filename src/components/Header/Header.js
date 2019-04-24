import React from 'react';
import {Navbar} from 'react-materialize' //porque desde el yarn lo instalé
import {Link} from "react-router-dom"
import './Header.css' //depende de la arquitectura del proyecto la forma de llamar cosas
import Img from './img1.png'


const Header = () => {


    return (
      <div>

        <div className = "card white center">
          <img alt="" src={Img}/>
        </div>
        <Navbar className ="Navbar" alignLinks="right">
          <Link className="quesha-font" to="/inicio">
            Inicio
          </Link>
          <Link to="/productos" className="quesha-font">
            Nuestros Productos
          </Link>
          <Link to="/organizaciones" className="quesha-font">
            Ventas institucionales
          </Link>
          <Link to="/contacto" className="quesha-font">
            Contáctanos
          </Link>
        </Navbar>

      </div>
    );


}

export default Header;
