import React, { Component } from 'react';
import './ProjectInfo.css';
import './video-react.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import { Player } from 'video-react';
import arrowImage from '../download.svg';
import firstVideo from '../../img/Thrive/thriveMovie.mov'
import firstImage from '../../img/Thrive/ThriveMockup.png';
import secondImage from '../../img/Thrive/ThriveDesktopMockup.png';
import thirdImage from '../../img/Thrive/ThriveBigNumbers.png';
import fourthImage from '../../img/Thrive/ThriveInfographicMockup.png';
import fifthImage from '../../img/Thrive/ThriveFont.png';
import sixthImage from '../../img/Thrive/ThriveColor.png';
import seventhImage from '../../img/Thrive/ThriveConversion.png';
import {Element} from 'react-scroll';



class ProjectThrive extends Component {
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
          <h1 className="projectInfoRubrik"> Thrive </h1>
          <h2 className="projectInfoSubRubrik"> 
          A campaign site for a small ecological, vegan, Fairtrade marked store. 
</h2>
          <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://github.com/cjcmattsson/THRIVEFinal"><h4>GitHub</h4></a></div>
          <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Done</h4></div>
          <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={firstImage} /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Our Goals</h1>
          <h2 className="secondImgText">When we made our market research, we noticed that people generally had poor knowledge about what the different labels (vegan, Fairtrade, ecological) stood for. Mainly young people between 15-26 wanted to know more about it. So we decided to try to create an entirely new user base for THRIVE through education.

</h2>
        </div>
         <div class="greyImgBackground"> <img className="projectImage highImage"src={secondImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Flow</h1>
          <h2 className="secondImgText">Because the site was going to be educational we focused a lot on the user flow, so the site would feel more like a story.</h2>
        </div>
         <div class="greyImgBackground"><Player
      playsInline
      poster={firstImage}
      src={firstVideo}
      fluid={false}
      className="highVideo"
    /> </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Feeling</h1>
          <h2 className="secondImgText">We noticed that the general public didn’t trust the environmental reports from big company’s like HM, ELLOS and MQ so we truly wanted to separate THRIVE from them. We did that through using playful colors and fonts.
</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={thirdImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Infographics
</h1>
          <h2 className="secondImgText">Big Chunks of texts are boring, so we tried to find a nice balance between text and infographics.</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={fourthImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Font</h1>
          <h2 className="secondImgText">We used the tough and frisky looking Permanent Marker as our display font. And for almost all other text we used Rubik which is a round and playful font. Which also is easily read.
</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={fifthImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Colors</h1>
          <h2 className="secondImgText">We tried to combine colors which is both playful and flat. And has a natural connection to the subject its going to present.

</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage highImage"src={sixthImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Conversion</h1>
          <h2 className="secondImgText">Our big call to action is the signup for THRIVEs newsletter. But also to educating future buyers about vegan, Fairtrade, ecological clothes which heightens the value of THRIVEs services. 
</h2>
        </div>
        <div class="greyImgBackground"> <img className="projectImage"src={seventhImage} /> </div>
        <Link to="/projectInfographic">
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

export default ProjectThrive;
