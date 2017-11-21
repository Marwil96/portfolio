import React, { Component } from 'react';
import './Components.css';
import {
  Link
} from 'react-router-dom';
import Slider from 'react-slick';
import {Element} from 'react-scroll';

var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      swipe: true,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1.5 } }, { breakpoint: 360, settings: { slidesToShow: 1 } }]
    };

class ProjectPage extends Component {
  showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
      <Element name="projectPage" className="projectPageContainer">
          <h1 className="projectRubrik"> Projects </h1>
          <h1 className="projectSubheaderText ">
          <span className="projectSubheader projectSubheaderColor2"> Done </span></h1>

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
            <Link to='/projectStarvation' className="sliderContainer projectx3">
              <h3 className="projectBoxMinorRubrik"> Design </h3>
              <h1 className="projectBoxRubrik">Concept Site</h1>
              <h2 className="projectBoxUnderRubrik">Starvation</h2>
              <h3 className="projectBoxText">Concept site about the phases of starvation</h3>
            </Link>
          </Slider>

          <h1 className="projectSubheaderText subheaderPosition2"><span className="projectSubheader"> On The Way </span></h1>
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
           
          </Slider>
          
        </Element>
    );
  }
}

export default ProjectPage;
