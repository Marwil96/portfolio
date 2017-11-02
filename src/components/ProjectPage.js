import React, { Component } from 'react';
import './Components.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Slider from 'react-slick';
import {scroller, Element} from 'react-scroll';
import SliderBox from './common/SliderBox.js';

var pageOrientation = 0;
var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4
    };

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
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
            <Link to='/projectPortfolio' className="sliderContainer project2">
              <h3 className="projectBoxMinorRubrik"> Developer </h3>
              <h1 className="projectBoxRubrik">Reporter</h1>
              <h2 className="projectBoxUnderRubrik">Errors</h2>
              <h3 className="projectBoxText">An Service built on<br/> react and react native</h3>
            </Link>
            <div className="sliderContainer project3">
              <h3 className="projectBoxMinorRubrik"> Developer & Design </h3>
              <h1 className="projectBoxRubrik">ReactNative</h1>
              <h2 className="projectBoxUnderRubrik">Learn to write</h2>
              <h3 className="projectBoxText">A text about the<br/> future of Apps</h3>
            </div>
          </Slider>
          <h1 className="projectSubheaderText subheaderPosition2"><span className="projectSubheader projectSubheaderColor2"> Done </span></h1>

          <Slider {...settings} className="slider">
          <Link to='/projectPortfolio' className="sliderContainer projectx1">
              <h3 className="projectBoxMinorRubrik"> Developer & Design </h3>
              <h1 className="projectBoxRubrik">Portfolio</h1>
              <h2 className="projectBoxUnderRubrik">Show my self</h2>
              <h3 className="projectBoxText">An Portfolio page that shows my work</h3>
            </Link>
            <Link to='/projectInfographic' className="sliderContainer projectx2">
              <h3 className="projectBoxMinorRubrik"> Design </h3>
              <h1 className="projectBoxRubrik">Infographic</h1>
              <h2 className="projectBoxUnderRubrik">Unequal</h2>
              <h3 className="projectBoxText">How to show unequal disability allowance</h3>
            </Link>
          </Slider>
        </Element>
    );
  }
}

export default ProjectPage;
