import React, { Component } from 'react';
import './ProjectInfo.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import arrowImage from '../download.svg';
import LandingPageImage from '../../img/LandingPage.png';
import ProjectPageImage from '../../img/ProjectPage.png';
import AboutPageImage from '../../img/AboutPage.png';
import {scroller, Element} from 'react-scroll';



class ProjectPortfolio extends Component {
  render() {
    return (
      <Element className="projectInfoContainer">
      <Link to="/landingPage">
            <img className="backArrow" src={arrowImage}/>
      </Link>
      <div className="projectInfoTextContainer">
          <h1 className="projectInfoRubrik"> Portfolio </h1>
          <h2 className="projectInfoSubRubrik"> An personal portfolio<br/> to show my work.</h2>
          <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <h4>Website</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={LandingPageImage} /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Project</h1>
          <h2 className="secondImgText">Navigate easily through the projects using the slick module.</h2>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={ProjectPageImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">About</h1>
          <h2 className="secondImgText">Quick Information about myself.</h2>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={AboutPageImage} /> </div>
        <Link to="/projectInfographic">
            <img className="rightArrow" src={arrowImage}/>
      </Link>
      <Link to="/projectInfographic">
            <img className="leftArrow" src={arrowImage}/>
      </Link>
      </Element>
    );
  }
}

export default ProjectPortfolio;
