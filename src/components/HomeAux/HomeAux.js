import React, { Fragment } from 'react';


const HomeAux = () => {


    return (
      <Fragment>
        <div className="parallax-container">
          <div className="parallax">
            <img alt='' src="./img1.png" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img alt='' src="./img1.png" /></div>
        </div>
      </Fragment>
    );


}

export default HomeAux;
