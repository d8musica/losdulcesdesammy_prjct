import React from 'react';
import {Navbar} from 'react-materialize' //porque desde el yarn lo instalé
import {Link} from "react-router-dom"
import './Header.css' //depende de la arquitectura del proyecto la forma de llamar cosas
import Img from './logo.png'


const Header = () => {


    return (
      <div>

        <div className = "card white center">
          <Link to = "/"><img alt="" src={Img} width="25%"/></Link>
        </div>
        <Navbar className ="Navbar" alignLinks="right">
          <Link className="quesha-font" to="/inicio">
            Inicio
          </Link>
          <Link to="/productos" className="quesha-font">
            Tortas
          </Link>
          <Link to="/productos" className="quesha-font">
          Pastelería
          </Link>
          <Link to="/productos" className="quesha-font">
            Postres
          </Link>
          <Link to="/productos" className="quesha-font">
            Bebidas
          </Link>
          <Link to="/productos" className="quesha-font">
            Helados
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
