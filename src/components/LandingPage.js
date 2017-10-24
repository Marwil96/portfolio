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
  }
  showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
      <div className="App"> 
      <h1 className="menuText">
        <span><Link activeClass="active" to="LandingPage" spy={true} smooth={true} duration={500}>01</Link></span>/
        <span><Link activeClass="active" to="projectPage" spy={true} smooth={true} duration={500}>02</Link></span>/
        <span><Link activeClass="active" to="aboutPage" spy={true} smooth={true} duration={500}>03</Link></span>
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
        <Element name="projectPage" className="projectPageContainer">
          <h1 className="projectRubrik"> Projects </h1>
          <h1 className="projectSubheaderText"><span className="projectSubheader"> On The Way </span></h1>
          <Slider {...settings} className="slider">
            <div className="sliderContainer project1">
              <h3 className="projectBoxMinorRubrik"> Design </h3>
              <h1 className="projectBoxRubrik">T H R I V E</h1>
              <h2 className="projectBoxUnderRubrik">Education</h2>
              <h3 className="projectBoxText">Make a campain site</h3>
            </div>
            <div className="sliderContainer project2">
              <h3 className="projectBoxMinorRubrik"> Developer </h3>
              <h1 className="projectBoxRubrik">Reporter</h1>
              <h2 className="projectBoxUnderRubrik">Errors</h2>
              <h3 className="projectBoxText">An Service built on<br/> react and react native</h3>
            </div>
            <div className="sliderContainer project3">
              <h3 className="projectBoxMinorRubrik"> Developer & Design </h3>
              <h1 className="projectBoxRubrik">ReactNative</h1>
              <h2 className="projectBoxUnderRubrik">Learn to write</h2>
              <h3 className="projectBoxText">A text about the<br/> future of Apps</h3>
            </div>
          </Slider>
          <h1 className="projectSubheaderText subheaderPosition2"><span className="projectSubheader projectSubheaderColor2"> Done </span></h1>

          <Slider {...settings} className="slider">

            <div className="sliderContainer projectx1">
              <h3 className="projectBoxMinorRubrik"> Developer & Design </h3>
              <h1 className="projectBoxRubrik">Portfolio</h1>
              <h2 className="projectBoxUnderRubrik">Show my self</h2>
              <h3 className="projectBoxText">An Portfolio page that shows my work</h3>
            </div>
            <div className="sliderContainer projectx2">
              <h3 className="projectBoxMinorRubrik"> Design </h3>
              <h1 className="projectBoxRubrik">Infographic</h1>
              <h2 className="projectBoxUnderRubrik">Unequal</h2>
              <h3 className="projectBoxText">How to show unequal disability allowance</h3>
            </div>
          </Slider>
        </Element>
         <About/>
          <div className="footerContainer"> 
            <div className="footerLinkContainer">
              <h1 className="footerLinkText"> 
              <Link to="/about">  About</Link><br/>
                Contact </h1>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"> William Martinsson
              <br/> 0768023804
              <br/> William_martinsson@hotmail.com </h2>
            </div>
          </div>
      </div>
    );
  }
}

export default LandingPage;
