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
import ProjectPortfolio from './components/projects/ProjectPortfolio';
import ProjectInfographic from './components/projects/ProjectInfographic';
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
  constructor(props) {
    super(props);
    this.state= {
      AppFixed: false,
    };
  }
  fixedApp() {
    if(this.state.AppFixed === false ) {
      return "App"
    }
    else if(this.state.AppFixed === true ) {
      return "App fixed"
    }
  }
  changeAppState() {
    const currentState = this.state.AppFixed;
    this.setState({ AppFixed: !currentState });
  }
  render() {
    return (	
    <Router>
    <div>
    <Route path="/">
    <div>
      <Route path="/landingPage" component={LandingPage} AppFixed={this.fixedApp.bind(this)}/>
      <Route path="/about" component={About}/>
      <Route path="/projectPage" component={ProjectPage} />
      </div>
      </Route>
      <AnimatedRoute path="/projectPortfolio" component={ProjectPortfolio} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      <AnimatedRoute path="/projectInfographic" component={ProjectInfographic} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      </div>
  	</Router>
    );
  }
}

export default App;
