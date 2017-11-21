import React, { Component } from 'react';
import './ProjectInfo.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import arrowImage from '../download.svg';
import firstImage from '../../img/menuGif.gif';
import secondImage from '../../img/StarvationAllScreens.png';
import {Element} from 'react-scroll';



class ProjectStarvation extends Component {
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
          <h1 className="projectInfoRubrik"> The Phases of Starvation </h1>
          <h2 className="projectInfoSubRubrik"> An concept site about the 
phases of starvation</h2>
          <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://www.behance.net/gallery/58864945/Concept-Site-The-Phases-of-Starvation"><h4>Website</h4></a></div>
          <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Menu</h1>
          <h2 className="secondImgText">Navigate fast through the different subjects.</h2>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={firstImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Separation of pages</h1>
          <h2 className="secondImgText">Last page is white to create a greater contrast.</h2>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={secondImage} /> </div>
        <Link to="/projectPortfolio">
            <img className="rightArrow" src={arrowImage}/>
      </Link>
      <Link to="/projectInfographic">
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

export default ProjectStarvation;
