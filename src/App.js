import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { spring, AnimatedRoute } from 'react-router-transition';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import ProjectInfo from './components/ProjectInfo';
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

class App extends Component {
  render() {
    return (	
    <Router>
    <div>
      <Route path="/" component={LandingPage}/>
      <Route path="/about" component={About}/>
      <Route path="/projectPage" component={ProjectPage} />
      
      <AnimatedRoute path="/project" component={ProjectInfo} atEnter={{ offset: -100 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }}
      mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
      })} />
      </div>
  	</Router>
    );
  }
}

export default App;
