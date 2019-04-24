import React, { Fragment } from 'react';
import './HomeAux.css'
import Img1 from './img/jugos.jpeg'
import Img2 from './img/mesas.jpeg'

const HomeAux = () => {


    return (
      <Fragment>
        <div className="parallax-container">
          <div className="parallax">
            <img alt='' src={Img1} />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="blue-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img alt='' src={Img2} /></div>
        </div>
      </Fragment>
    );


}

export default HomeAux;
