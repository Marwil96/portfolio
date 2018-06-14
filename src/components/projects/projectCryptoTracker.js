import React, { Component } from 'react';
import './ProjectInfo.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import {ScrollToTopOnMount ,SectionsContainer, Section} from 'react-fullpage';
import { Player } from 'video-react';
import arrowImage from '../download.svg';
import visualImage1 from '../../img/CryptoTracker/Why.png';
import visualImage2 from '../../img/CryptoTracker/PersonalGoal.png';
import visualImage3 from '../../img/CryptoTracker/Technlogy.png';
import visualImage4 from '../../img/CryptoTracker/CryptoTrackerVideo.gif';



let options = {
      sectionClassName:     'section',
      anchors:              ['/projectCryptoTracker/#1', '/projectCryptoTracker/#2', '/projectCryptoTracker/#3','/projectCryptoTracker/#4','/projectCryptoTracker/#5'],
      scrollBar:            false,
      navigation:           false,
      lockAnchors: false,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '0', // the section top padding 
      sectionPaddingBottom: '0', // the section bottom padding 
    };

var data = [
  {sectionRubrik:"Our Mission", sectionText:"JI created this sideproject to show my skills in Development & Design and how I am capable of taking a project the entire way. From ux to backend development in a relatively short timeframe.", visualImage:visualImage1},
  {sectionRubrik:"Why", sectionText:"I created this sideproject to show my skills in Development & Design and how I am capable of taking a project the entire way. From ux to backend development in a relatively short timeframe.", visualImage:visualImage1},
  {sectionRubrik:"Personal Mission", sectionText:"One thing that separates talented developers from the rest is their ability to write good looking code, which is easily read and comprehendible. Which is why It became my goal for this project to write good code. I used stylelinter as a guideline to succeed with my goal. ", visualImage:visualImage2},
  {sectionRubrik:"Technology", sectionText:"I created the app with Facebooks React Native, which is an easy way to create applications that is compatible on both android and ios. I fetched the information from coinmarketcaps api. I used redux to both make the app structure better and making the information easier to fetch. ", visualImage:visualImage3},
  {sectionRubrik:"Design", sectionText:"Sketch were my trustworthy companion throughout this project as always. I used Zeplin to ease the transition between design and code. I wanted to try out some animation so I also used principle. ", visualImage:visualImage4},
]

class projectCryptoTracker extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      introContainerClass:"introContainer"
    };
  }

  //  componentWillMount() {
  //   window.scrollTo(0, 0)
  // }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1300);
  }

  renderInformation(data) {
    console.log(data);
    return(
    <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data.sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data.sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage1} className="visualImage"/>
        </div>
      </Section>
      )
  }


  backArrow(){
    let arrowColor ="#F7E0BC";
    if(window.location.href !== "http://localhost:3000/projectCryptoTracker#1" ){
      arrowColor = "black"
    }
    else {
      arrowColor ="#F7E0BC"
    }
    return (
      <Link to="/">
              <svg className="backArrow" width="52px" height="93px" viewBox="0 0 52 93">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Ny-ProjektInfo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy" transform="translate(-91.000000, -82.000000)" fill-rule="nonzero" fill={arrowColor}>
                          <g id="download-copy" transform="translate(117.000000, 128.500000) rotate(-270.000000) translate(-117.000000, -128.500000) translate(70.500000, 102.500000)">
                              <path d="M84.9874097,1.41601919 L46.499259,39.9134375 L8.01110829,1.41138537 C6.17611424,-0.423608686 3.20776422,-0.423608686 1.37277017,1.41138537 C-0.457590057,3.24637942 -0.457590057,6.21936326 1.37277017,8.05435731 L43.1779661,49.8734547 L43.1779661,49.8734547 L43.1779661,49.8734547 C45.0083263,51.7084488 47.9813102,51.7084488 49.8116704,49.8734547 L91.6168663,8.05474346 C93.4472266,6.21974941 93.4472266,3.24213175 91.6168663,1.40713769 C89.7911399,-0.418974863 86.8177699,-0.418974863 84.9874097,1.41601919 Z" id="Expand_More"></path>
                          </g>
                      </g>
                  </g>
              </svg>
      </Link>
      )
  }
  pageRender(loading) {
    if(loading === true) {
      setTimeout(() => this.setState({ introContainerClass: "introContainerFinished introContainer" }), 1400);
      console.log("Loading")
      return(
          <div className="animationContainer"> 
            <div className="dot"></div>
            <h1 style={{color: "#F5F5F5", fontSize:"20vw", zIndex:"1000000", alignSelf:"center",fontFamily: 'Poppins', fontWeight:1000}}> Loading </h1>
            </div>);
    }
    return (
      <SectionsContainer {...options}>
      <Section >
       <div className={this.state.introContainerClass}>
          <div className="projectInfoTextContainer">
            <h1 className="projectInfoRubrik"> Cryptotracker </h1>
            <h2 className="projectInfoSubRubrik"> A React Native app that tracks the Cryptocurrencys you are interested in. </h2>
            <div className="infoSubContainerContainer">
            <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://github.com/Marwil96/CryptoTracker"><h4>Github</h4></a></div>
            <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
            <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2018</h4></div>
            </div>
        </div>
        <div className="readMoreContainer">
          <a href="#/projectCryptoTracker/#2"> <h2 className="readMoreText"> Read More </h2></a>
          <div className="readMoreLine"> </div>
        </div>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[1].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[1].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage1} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[2].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[2].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage2} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[3].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[3].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage3} className="visualImage"/>
        </div>
      </Section>
      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[4].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[4].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage4} className="visualImage"/>
        </div>
      </Section>



      {/*{data.map(data => (this.renderInformation(data)))}*/}

      </SectionsContainer>
      )
  }

    scrolli() {
      console.log(window.location.hostname + "/ww")
      if(window.location.href === window.location.origin +"/#/projectCryptoTracker/#2") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/5)", background:"#5345E4", marginTop:"calc(100vh/5)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectCryptoTracker/#3") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/5)", background:"#5345E4", marginTop:"calc(20vh*2)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectCryptoTracker/#4") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/5)", background:"#5345E4", marginTop:"calc(20vh*3)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectCryptoTracker/#5") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/5)", background:"#5345E4", marginTop:"calc(20vh*4)"} }> </div>
          )
      }

    }

    scrollWheel() {
      if(window.location.href !== window.location.origin +"/#/projectCryptoTracker/#1" ){
    return(
      <div>
      
      <div class="scroll"> 
      {this.scrolli()}
      {data.map((data, i) => (
         <a href={"/#/projectCryptoTracker/#"+(i+1)}> <div className="scrollLinks" id={i} style={{height:"calc(100%/5)", background:"#F7E0BC"} }> </div></a>
        ))}
      </div>
      </div>
      )
  }
    
  }
  render() {
    return (
      <div>
      {this.scrollWheel()}
      {this.backArrow()}
      <ScrollToTopOnMount/>
      {this.pageRender(this.state.loading)}
      </div>
      
    );
  }
}

export default projectCryptoTracker;
