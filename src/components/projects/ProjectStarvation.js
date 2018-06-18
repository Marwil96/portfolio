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
      <Element className="infoContainer">
      <Link to="/">
            <svg className="backArrow" width="52px" height="93px" viewBox="0 0 52 93">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Ny-ProjektInfo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy" transform="translate(-91.000000, -82.000000)" fill-rule="nonzero" fill={"black"}>
                          <g id="download-copy" transform="translate(117.000000, 128.500000) rotate(-270.000000) translate(-117.000000, -128.500000) translate(70.500000, 102.500000)">
                              <path d="M84.9874097,1.41601919 L46.499259,39.9134375 L8.01110829,1.41138537 C6.17611424,-0.423608686 3.20776422,-0.423608686 1.37277017,1.41138537 C-0.457590057,3.24637942 -0.457590057,6.21936326 1.37277017,8.05435731 L43.1779661,49.8734547 L43.1779661,49.8734547 L43.1779661,49.8734547 C45.0083263,51.7084488 47.9813102,51.7084488 49.8116704,49.8734547 L91.6168663,8.05474346 C93.4472266,6.21974941 93.4472266,3.24213175 91.6168663,1.40713769 C89.7911399,-0.418974863 86.8177699,-0.418974863 84.9874097,1.41601919 Z" id="Expand_More"></path>
                          </g>
                      </g>
                  </g>
              </svg>
      </Link>

      <div className="thriveTextContainer">
          <h1 className="infoInfoRubrik"> The Phases of Starvation </h1>
          <h2 className="infoSubRubrik"> An concept site about the 
phases of starvation</h2>
          <div className="subContainer"><h3 className="noMargin">visit</h3> <a href="https://www.behance.net/gallery/58864945/Concept-Site-The-Phases-of-Starvation"><h4>Website</h4></a></div>
          <div className="subContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
          <div className="subContainer"><h3 className="noMargin">year</h3><h4>2017</h4></div>
        </div>
        <div className="imgInfoContainerLeft">
          <h1 className="secondImgRubrik">Menu</h1>
          <h2 className="secondImgText">Navigate fast through the different subjects.</h2>
        </div>
        <div className="whiteImgBackground"> <img className="projectImage"src={firstImage} /> </div>
        <div className="imgInfoContainerRight">
          <h1 className="secondImgRubrik">Separation of pages</h1>
          <h2 className="secondImgText">Last page is white to create a greater contrast.</h2>
        </div>
        <div class="whiteImgBackground"> <img className="projectImage"src={secondImage} /> </div>
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
