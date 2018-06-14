import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { spring, AnimatedRoute } from 'react-router-transition';
import ReactGA from 'react-ga';
import LandingPage from './components/LandingPage';
import * as Scroll from 'react-scroll';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import ProjectPortfolio from './components/projects/ProjectPortfolio';
import ProjectInfographic from './components/projects/ProjectInfographic';
import ProjectStarvation from './components/projects/ProjectStarvation';
import ProjectReporter from './components/projects/ProjectReporter';
import ProjectThrive from './components/projects/ProjectThrive';
import ProjectKnowel from './components/projects/projectKnowel';
import ProjectCryptoTracker from './components/projects/projectCryptoTracker';
import ProjectAkademiskaHus from './components/projects/projectAkademiskaHus';


ReactGA.initialize('UA-37970043-2'); //Unique Google Analytics tracking number
const history = createHistory();
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});
let ScrollerLink      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      nav: "navigation",
      app: "App",
    };
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1300);
  }
  navigationOn() {
    this.setState({nav:"navigation navigationActive", app:"App dark"})
  }
  navigationOff() {
    this.setState({nav:"navigation", app:"App"})
  }
  whatLink(url) {
    if(url === window.location.origin+"/#/") {
              return (
                <ScrollerLink isDynamic={true} name="projectPage" className="navigationClose" onClick={this.navigationOff.bind(this)}>About</ScrollerLink>)
            }
            else {
             return (<Link to="/" className="navigationClose" onClick={this.navigationOff.bind(this)}>About</Link>)  
            }
  }
  pageRender(loading, url) {
    console.log(loading)
    if(loading === true) {
      console.log("Loading")
      return(
          <div className="animationContainer"> 
            <div className="dot"></div>
            <h1 style={{color: "#F5F5F5", fontSize:"20vw", zIndex:"1000000", alignSelf:"center",fontFamily: 'Poppins', fontWeight:1000}}> Loading </h1>
            </div>);
    }
    return (
       <div className="App">
     <div onClick={this.navigationOn.bind(this)} id="menuToggle" style={{position:"fixed"}}>
    <input type="checkbox" />
    <span style={{background:"#5245e5"}}></span>
    <span style={{background:"#5245e5"}}></span>
    <span style={{background:"#5245e5"}}></span>
    </div>
     <div className={this.state.nav}> 
        <div className="navigationProjectContainer">
            <div onClick={this.navigationOff.bind(this)} id="menuToggle">
              <input type="checkbox" />
              <span style={{background:"white", transform: "rotate(45deg) translate(-2px, -1px)"}}></span>
              <span style={{background:"white", opacity:"0"}}></span>
              <span style={{background:"white", transform: "rotate(-45deg) translate(0, -4px)"}}></span>
              </div>
            <h2 className="navigationProjectSubHeader" >Projects</h2>
            <Link to="/projectKnowel" className="navigationProject" onClick={this.navigationOff.bind(this)}>Knowel</Link>
            <Link to="/projectThrive" className="navigationProject" onClick={this.navigationOff.bind(this)}>Thrive</Link>
            <Link to="/projectCryptoTracker" className="navigationProject" onClick={this.navigationOff.bind(this)}>Cryptotracker</Link>
          </div>
          <div className="navigationButtons">
            <Link to="/#Home" className="navigationClose" onClick={this.navigationOff.bind(this)}>Home</Link>
            {this.whatLink(url)}
            <a href="https://williammartinsson.typeform.com/to/grsvRk" className="navigationClose" onClick={this.navigationOff.bind(this)}>Contact</a>
          </div>
        </div>
    <Main />
    </div>
     )
  }
  render() {

    return(
      <div>
     {this.pageRender(this.state.loading, window.location.href)}
     </div>
      )
  }
  };

const Home = () => (
  <div>
    <LandingPage/>
  </div>
  )

const Abouter = () => (
  <ProjectThrive/>
  )
function fireTracking() {
    ReactGA.pageview(window.location.hash);
    console.log("Analytics Update")

};
const Main = () => (
    <Switch history={history}>
      <Route exact path="/" component={Home}/>
      <Route path="/projectThrive" component={ProjectThrive}/>
      <Route path="/projectKnowel" component={ProjectKnowel}/>
      <Route path="/projectStarvation" component={ProjectStarvation}/>
      <Route path="/projectCryptoTracker" component={ProjectCryptoTracker}/>
      <Route path="/projectAkademiskaHus" component={ProjectAkademiskaHus}/>
    </Switch>
)



// class App extends Component {
//   render() {
//     return (	
//     <Router>
//     <div>
//     <Switch>
//     <div>
//       <Route path="/" component={landingPage}/>
//       <Route path="/about" component={About}/>
//       <Route path="/projectKnowel" component={ProjectKnowel}/>
//       <Route path="/projectPage" component={ProjectPage} />
//     </div>
//       </Switch>
//       <Switch>
//       <AnimatedRoute path="/projectPortfolio" component={ProjectPortfolio} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectInfographic" component={ProjectInfographic} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectStarvation" component={ProjectStarvation} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectReporter" component={ProjectReporter} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectThrive" component={ProjectThrive} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       </Switch>
//       </div>
//   	</Router>
//     );
//   }
// }

export default App;
