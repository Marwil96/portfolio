import React, { Component } from 'react';
import './ProjectInfo.css';
import './video-react.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import { Player } from 'video-react';
import arrowImage from '../download.svg';
import firstVideo from '../../img/Reporter/ReporterVideo.mov'
import firstImage from '../../img/Reporter/ReporterLogin.png';
import secondImage from '../../img/Reporter/ReporterMap.png';
import thirdImage from '../../img/Reporter/ReporterReport.png';
import fourthImage from '../../img/Reporter/ReporterWebbCity.png';
import {Element} from 'react-scroll';



class ProjectReporter extends Component {
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
          <h1 className="projectInfoRubrik"> Reporter </h1>
          <h2 className="projectInfoSubRubrik"> 
          Reporter is an application that allows you to easily report infrastructure problems</h2>
          <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://github.com/Marwil96/Reporter"><h4>GitHub</h4></a></div>
          <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>On Going</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div class="greyImgBackground"> <Player
      playsInline
      poster={firstImage}
      src={firstVideo}
      fluid={false}
      className="highVideo"
    /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">React Native</h1>
          <h2 className="secondImgText">Due to the fact that I use React Native as a framework, I can work very modularly, which simplifies the development process and makes it easier to build on the code as well as changing it. A big advantage is also that you don’t have to develop two separate apps for iOS and Android.
</h2>
        </div>
         <div class="greyImgBackground"> <img className="projectImage highImage"src={firstImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Google Maps API</h1>
          <h2 className="secondImgText">The app uses the AirBnb developed module to display coordinates on the map.

</h2>
        </div>
         <div class="greyImgBackground"> <img className="projectImage highImage"src={secondImage} /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Firebase</h1>
          <h2 className="secondImgText">The app uses Firebase for data management / database for login and information such as subject, description, coordinates and city (comes from a function that decides where you are based on your coordinates), all that information is saved from the app to firebase. I decided to use Firebase because it's easy to start with and simple (you do not have to write server side APIs).


</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={thirdImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">React</h1>
          <h2 className="secondImgText">
Just like React Native, you have the ability to work modularly.


</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage"src={fourthImage} /> </div>
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

export default ProjectReporter;
