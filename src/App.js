import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";

import Header from './components/Header/Header.js'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          
        </div>
      </Router>
    );
  }
}

export default App;
