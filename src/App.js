import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { spring, AnimatedRoute } from 'react-router-transition';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import ProjectPortfolio from './components/projects/ProjectPortfolio';
import ProjectInfographic from './components/projects/ProjectInfographic';
import ProjectStarvation from './components/projects/ProjectStarvation';
import ProjectReporter from './components/projects/ProjectReporter';
import ProjectThrive from './components/projects/ProjectThrive';

const history = createHistory();
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
class Quick extends Component {
  constructor(props) {
    super(props);
    this.state= {
      woper: true,
    };
  }
  componentDidUpdate()
  {
    console.log("loaded Woper")
     window.location.reload();
  }
  reload() {
    window.location.reload();
  }
  componentDidMount() {
   console.log("wop")
    history.push('/#landingPage')

  }
  render() {
  return (
    null
  );
  }
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
  componentWillMount() {
   console.log("wop")
  }
  render() {
    return (	
    <Router>
    <div>
    <Switch>
    <div>
      <Route path="/" component={Quick}/>
      <Route path="/landingPage" component={LandingPage} AppFixed={this.fixedApp.bind(this)}/>
      <Route path="/about" component={About}/>
      <Route path="/projectPage" component={ProjectPage} />
      </div>
      </Switch>
      <Switch>
      <AnimatedRoute path="/projectPortfolio" component={ProjectPortfolio} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      <AnimatedRoute path="/projectInfographic" component={ProjectInfographic} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      <AnimatedRoute path="/projectStarvation" component={ProjectStarvation} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      <AnimatedRoute path="/projectReporter" component={ProjectReporter} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      <AnimatedRoute path="/projectThrive" component={ProjectThrive} atEnter={{ offset:0 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }} />
      </Switch>
      </div>
  	</Router>
    );
  }
}

export default App;
