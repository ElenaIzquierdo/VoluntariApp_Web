import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

//Pages:
import Home from './pages';
import Home2 from './pages/home2';

class App extends Component {
  render(){
    return(
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home2" component={Home2}/>
        </Router>
    )
  }
}

export default App;
