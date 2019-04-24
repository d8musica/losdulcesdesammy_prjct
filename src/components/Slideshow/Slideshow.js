import React, {Fragment} from 'react';
import {Carousel,Modal} from 'react-materialize';
import Img1 from './img1.png'


const Slideshow = () => {


    return (
      <Fragment>

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

          <div className="card-panel center white">

            <div><img alt='' src={Img1} href = "#modal1" className="modal-trigger"/>
            <Modal id="modal1" header="Producto de temporada">
              Temporada!!
            </Modal></div>

          </div>

      </Fragment>







    );


}

export default Slideshow;
