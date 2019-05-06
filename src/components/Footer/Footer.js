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
              <h5 className="white-text quesha-font center-align">Contáctanos</h5>
              <ul>

                <li className = "social-container center-align">
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

                <li className="white-text avenir-font">Email</li>
                <li className="white-text avenir-font">(+57) 305 4526887</li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text quesha-font center-align">Visítanos</h5>
              <ul>
                <li><a className="white-text avenir-font" href="#!"> <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4370119817568!2d-75.55189728523031!3d6.337397995413764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fcb0b153c59%3A0xf6e063556b7afcd6!2sLos+Dulces+De+Samy!5e0!3m2!1ses-419!2sco!4v1557170510285!5m2!1ses-419!2sco"} title={"Ubicación"}  width={"200"} height={"200"} frameborder={"0"}></iframe> </a></li>
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
