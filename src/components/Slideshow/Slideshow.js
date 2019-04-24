import React, {Fragment} from 'react';
import {Carousel,Modal} from 'react-materialize';
import Img1 from './img1.png'


const Slideshow = () => {


    return (
      <Fragment>

        <Carousel options={{fullWidth: true,indicators: true}} className="white-text center card-panel">
          <div className="teal">
            <h2>
              First Panel
            </h2>
            <p>
              This is your first panel
            </p>
          </div>
            <div className="teal">
              <h2>
                Second Panel
              </h2>
              <p>
                This is your second panel
              </p>
            </div>
            <div className="teal">
              <h2>
                Third Panel
              </h2>
              <p>
                This is your third panel
              </p>
            </div>
            <div className="teal">
              <h2>
                Fourth Panel
              </h2>
              <p>
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
