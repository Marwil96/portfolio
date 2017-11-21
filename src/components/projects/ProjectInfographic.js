import React, { Component } from 'react';
import './ProjectInfo.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import arrowImage from '../download.svg';
import firstImage from '../../img/Infographic.png';
import secondImage from '../../img/InfoGraphicNewsPaper.png';
import {Element} from 'react-scroll';



class ProjectInfographic extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
    };
  }
   componentWillMount() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  pageRender(loading) {
    console.log(loading)
    if(loading === true) {
      console.log("Loading")
      return(<div className="animationContainer"> <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div></div>)
  ;
    }
    return (
      <Element className="projectInfoContainer">
      <Link to="/landingPage">
            <img className="backArrow" src={arrowImage}/>
      </Link>

      <div className="projectInfoTextContainer">
          <h1 className="projectInfoRubrik"> Infographic </h1>
          <h2 className="projectInfoSubRubrik"> An Infographic about the unequal disability allowance.</h2>
          <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <h4>Website</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div class="greyImgBackground"> <img className="projectImage"src={firstImage} /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Color</h1>
          <h2 className="secondImgText">Take in the information fast with the help of the colors.</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage"src={secondImage} /> </div>
        <Link to="/projectStarvation">
            <img className="rightArrow" src={arrowImage}/>
      </Link>
      <Link to="/projectPortfolio">
            <img className="leftArrow" src={arrowImage}/>
      </Link>
      </Element>
      )
  }
  render() {
    return (
      <div>
      {this.pageRender(this.state.loading)}
      </div>
      
    );
  }
}

export default ProjectInfographic;
