import React, { Fragment } from 'react';
import './HomeAux.css'
import {Carousel} from 'react-materialize';
import Img1 from './img/img1.jpeg'
import Img2 from './img/img2.jpeg'

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
          <Carousel options={{fullWidth: true,indicators: true}} className="white-text center card-panel">
            <div style={{backgroundColor: "#dbcaa9"}}>
              <h2 className="quesha-font">
                First Panel
              </h2>
              <p className="avenir-font">
                This is your first panel
              </p>
            </div>
              <div style={{backgroundColor: "#f1b8a8"}}>
                <h2 className="quesha-font">
                  Second Panel
                </h2>
                <p className="avenir-font">
                  This is your second panel
                </p>
              </div>
              <div style={{backgroundColor: "#dbcaa9"}}>
                <h2 className="quesha-font">
                  Third Panel
                </h2>
                <p className="avenir-font">
                  This is your third panel
                </p>
              </div>
              <div style={{backgroundColor: "#9f684f"}}>
                <h2 className="quesha-font">
                  Fourth Panel
                </h2>
                <p className="avenir-font">
                  This is your fourth panel
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img alt='' src={Img2} /></div>
        </div>
      </Fragment>
    );


}

export default HomeAux;
