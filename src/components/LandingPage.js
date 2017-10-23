import React, { Component } from 'react';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import menuButton from './menu.svg';
import { slide as Menu } from 'react-burger-menu';
import Slider from 'react-slick';
import {scroller, Element} from 'react-scroll';
import {
  Link
} from 'react-router-dom';
import SliderBox from './common/SliderBox.js';

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
    this.state = {pageState: 1};
  }
  animateDown() {

      if(this.state.pageState === 1){
      return 'App'
      }
      else if(this.state.pageState === 2) {
        return 'App moveDown'
      }
    
    console.log('wop')
  }
  animateMenu() {
        if(this.state.pageState === 3) {
        return 'topMenuContainer'
      }
      else {
        return 'topMenuContainer moveToMeny'
      }
  }
  animate() {
    if(this.state.pageState === 1) { 
      this.setState({pageState: 2});
      console.log('arrow')
    }
  }
  animateMeny(){

    if(this.state.pageState === 1) { 
      this.setState({pageState: 3});
      
    }
  }
  showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
      <div className={this.animateDown()}> 
        <div className="landingPageContainer">
        <Menu 
          right 
          width={ '18%' } 
          customBurgerIcon={ <img className="menuButton" src={menuButton}/> 
          
          }>
            <h1 id="menuNamn"> William Martinsson </h1>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about"><Link to="/about">About </Link></a>
            <a id="contact" className="menu-item" href="/">Contact</a>
            <a id="Behance" className="menu-item" href="https://www.behance.net/William_mae68a">Behance</a>
            <a id="Medium" className="menu-item" href="https://medium.com/@marwil1996">Medium</a>
      </Menu>
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <Link activeClass="active" className="arrowContainer" to="test1" spy={true} smooth={true} duration={500} >
            <img className="downArrow bounce" src={arrowImage} onClick={this.animate.bind(this)}/>
          </Link>

          
        </div>
        <Element name="test1" className="projectPageContainer">
          <h1 className="projectRubrik"> Projects </h1>
          <h1 className="projectSubheaderText"><span className="projectSubheader"> On The Way </span></h1>
          <Slider {...settings} className="slider">
            <div className="sliderContainer project1">
              <h1 className="projectBoxRubrik">T H R I V E</h1>
              <h2 className="projectBoxUnderRubrik">Education</h2>
              <h3 className="projectBoxText">Make a campain site</h3>
            </div>
            <div className="sliderContainer project2">
              <h1 className="projectBoxRubrik">Reporter</h1>
              <h2 className="projectBoxUnderRubrik">Errors</h2>
              <h3 className="projectBoxText">An Service built on<br/> react and react native</h3>
            </div>
            <div className="sliderContainer project3">
              <h1 className="projectBoxRubrik">ReactNative</h1>
              <h2 className="projectBoxUnderRubrik">Learn to write</h2>
              <h3 className="projectBoxText">A text about the<br/> future of Apps</h3>
            </div>
          </Slider>
          <h1 className="projectSubheaderText subheaderPosition2"><span className="projectSubheader projectSubheaderColor2"> Done </span></h1>

          <Slider {...settings} className="slider">

            <div className="sliderContainer projectx1">
              <h1 className="projectBoxRubrik">T H R I V E</h1>
              <h2 className="projectBoxUnderRubrik">Education</h2>
              <h3 className="projectBoxText">Make a campain site</h3>
            </div>
            <div className="sliderContainer projectx2">
              <h1 className="projectBoxRubrik">Reporter</h1>
              <h2 className="projectBoxUnderRubrik">Errors</h2>
              <h3 className="projectBoxText">An Service built on<br/> react and react native</h3>
            </div>
          </Slider>
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
        </Element>
      </div>
    );
  }
}

export default LandingPage;
