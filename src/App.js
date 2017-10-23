import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';

class App extends Component {
  render() {
    return (	
    <Router>
    <div>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/about" component={About}/>
      </div>
  	</Router>
    );
  }
}

export default App;
