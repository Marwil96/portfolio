import React, { Component } from 'react';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import menuButton from './menu.svg';
import { slide as Menu } from 'react-burger-menu';
import Slider from 'react-slick';
import {scroller, Element, Link} from 'react-scroll';
import SliderBox from './common/SliderBox.js';
import About from './About';
import ProjectPage from './ProjectPage';

var pageOrientation = 0;
var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4
    };

class LandingPage extends Component {
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
      return "App"
    }
  }
  changeAppState() {
    const currentState = this.state.AppFixed;
    this.setState({ AppFixed: !currentState });
  }
componentDidMount() {
  this.setState({ AppFixed: false});
}

  render() {
    return (
      <div className={this.fixedApp()}> 
      <h1 className="menuText">
        <span><Link activeClass="active" to="LandingPage" spy={true} smooth={true} duration={500}>01</Link></span>/
        <span><Link activeClass="active" to="projectPage" spy={true} smooth={true} duration={500}>02</Link></span>/
        <span><Link activeClass="active" to="AboutPage" spy={true} smooth={true} duration={500}>03</Link></span>
      </h1>
        <Element name="LandingPage" className="landingPageContainer">
      {/*<Menu 
          right 
          width={ '18%' } 
          customBurgerIcon={ <img className="menuButton" src={menuButton}/> 
          
          }>
            <h1 id="menuNamn"> William Martinsson </h1>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about"><Link activeClass="active" to="projectPage" spy={true} smooth={true} duration={500}>About </Link></a>
            <a id="contact" className="menu-item" href="/">Contact</a>
            <a id="Behance" className="menu-item" href="https://www.behance.net/William_mae68a">Behance</a>
            <a id="Medium" className="menu-item" href="https://medium.com/@marwil1996">Medium</a>
      </Menu> */}
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <Link activeClass="active" className="arrowContainer" to="projectPage" spy={true} smooth={true} duration={500} >
            <img className="downArrow bounce" src={arrowImage}/>
          </Link>
        </Element>
        <ProjectPage woperFunction={this.changeAppState.bind(this)} />
         <About/>
          <div className="footerContainer"> 
            <div className="footerLinkContainer">
              <h2 className="footerLinkText"> 
               <a href="https://medium.com/@marwil1996">Medium</a><br/>
               <a href="https://williammartinsson.typeform.com/to/grsvRk"> Contact </a></h2>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"><a href="https://www.behance.net/William_mae68a"> Behance</a>
              <br/> Github </h2>
            </div>
          </div>
      </div>
    );
  }
}

export default LandingPage;
