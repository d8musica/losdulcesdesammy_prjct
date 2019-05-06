import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'







const Home = () => {


    return (
      <div className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text quesha-font">¿Quiénes somos?</h5>
              <p className="grey-text text-lighten-4 avenir-font">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


            </div>
            <div className="col l3 s12">
              <h5 className="white-text quesha-font">Contáctanos</h5>
              <ul>

                <li className = "social-container">
                  <a className="waves-effect btn-floating social center-align transparent" href="https://www.instagram.com/losdulcesdesamy/">
                    <FontAwesomeIcon className="social" icon={faInstagram} size="2x"/>
                  </a>
                  <a className="waves-effect btn-floating social center-align transparent" href="https://www.facebook.com/losdulces.desamy.9">
                    <FontAwesomeIcon className="social" icon={faFacebookF} size="2x"/>
                  </a>
                  <a className="waves-effect btn-floating social center-align transparent" href="/">
                    <FontAwesomeIcon className="social" icon={faWhatsapp} size="2x"/>
                  </a>
                </li>

                <li><a className="white-text avenir-font" href="#!">Email</a></li>
                <li><a className="white-text avenir-font" href="#!">Teléfono</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text quesha-font">Visítanos</h5>
              <ul>
                <li><a className="white-text avenir-font" href="#!">Google API</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container avenir-font" >
            © Copyright - Los dulces de Samy
          </div>
        </div>
      </div>
    );


}

export default Home;
