import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css'

import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import HomeAux from './components/HomeAux/HomeAux.js'
import Footer from './components/Footer/Footer.js'
import Slideshow from './components/Slideshow/Slideshow.js'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Slideshow/>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/inicio' component={HomeAux}></Route>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
