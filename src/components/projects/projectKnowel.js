import React, { Component } from 'react';
import './ProjectInfo.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import {ScrollToTopOnMount ,SectionsContainer, Section} from 'react-fullpage';
import { Player } from 'video-react';
import arrowImage from '../download.svg';
import firstVideo from '../../img/Reporter/ReporterVideo.mov'
import firstImage from '../../img/Reporter/ReporterLogin.png';
import secondImage from '../../img/Reporter/ReporterMap.png';
import thirdImage from '../../img/Reporter/ReporterReport.png';
import fourthImage from '../../img/Reporter/ReporterWebbCity.png';
import visualImage1 from '../../img/Knowel/Mission.png';
import visualImage2 from '../../img/Knowel/identifyProblem.png';
import visualImage3 from '../../img/Knowel/role.png';
import visualImage4 from '../../img/Knowel/color.png';
import visualImage5 from '../../img/Knowel/cat.png';
import visualImage6 from '../../img/Knowel/attitude.png';
import visualImage7 from '../../img/Knowel/mobileFirst.png';
import visualImage8 from '../../img/Knowel/dynamic.png';
import visualImage9 from '../../img/Knowel/cms.png';
import visualImage10 from '../../img/Knowel/time.png';
import visualImage11 from '../../img/Knowel/future.png';




let options = {
      sectionClassName:     'section',
      anchors:              ['/projectKnowel/#1', '/projectKnowel/#2', '/projectKnowel/#3','/projectKnowel/#4','/projectKnowel/#5','/projectKnowel/#6','/projectKnowel/#7','/projectKnowel/#8','/projectKnowel/#9','/projectKnowel/#10','/projectKnowel/#11','/projectKnowel#/12'],
      scrollBar:            false,
      navigation:           false,
      lockAnchors: false,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '0', // the section top padding 
      sectionPaddingBottom: '0', // the section bottom padding 
    };

var data = [
  {sectionRubrik:"Our Mission", sectionText:"Jag och Karl-Anton fick uppdraget att skapa en helt ny grafisk identitet och hemsida till non-profit föreningen Knowel som jobbar med att sprida en entreprenörs värdegrund.", visualImage:visualImage1},
  {sectionRubrik:"Our Mission", sectionText:"I and Karl-Anton were assigned to create a brand new graphic identity and website for the non-profit association Knowel, which works to spread an entrepreneur's value base.", visualImage:visualImage1},
  {sectionRubrik:"Identifying the problem", sectionText:"The members of Knowel desired to feel proud of their identity and that their website would feel more professional.", visualImage:visualImage2},
  {sectionRubrik:"My Role", sectionText:"My role in the project was largely everything that happened on the website from development to design. I also worked with the typography, the colors and figuring out what approach we needed to have to solve the problem.", visualImage:visualImage3},
  {sectionRubrik:"Colors", sectionText:"We had two audiences that differ greatly from each other so we had to find a good middle ground. To do that, we used a neutral background, with stronger accent colors.", visualImage:visualImage4},
  {sectionRubrik:"Call to action", sectionText:"Its a button directly on the landing page, which leads to a contact-form, for those who want to easily contact Knowel.  ", visualImage:visualImage5},
  {sectionRubrik:"Attitude", sectionText:"We renamed the project page to Journal and the projects to Journey's to give the website and the association more character and build a feeling that what they are doing is something special.", visualImage:visualImage6},
  {sectionRubrik:"Mobilefirst", sectionText:"We spent a lot of time refining the mobile version of the site so it would feel perfect if not better in the phone where most students experience it.", visualImage:visualImage7},
  {sectionRubrik:"Dynamics", sectionText:"We put the text over the image to create more dynamics in the image as well as making it feel more analog and adventurous.", visualImage:visualImage8},
  {sectionRubrik:"CMS", sectionText:"The page is built on Contentful's CMS system. We put a lot of effort into making the cms easy to handle so that Knowel's members can easily add new journeys, which hopefully will make the website updated more often and make the site more relevant in the future.", visualImage:visualImage9},
  {sectionRubrik:"Limits", sectionText:"We had a sharp time pressure (120 hours) on us for such a big project, which meant we had to enter the production phase early. Due to this, we added more time to intervene and get feedback from Knowel instead of future users.", visualImage:visualImage10},
  {sectionRubrik:"Next Step", sectionText:"We believe that the next step is to bring out the word about Knowel even more to local businesses, and show them how Knowel can add add value. Which can be done by anything from Cold Calling to mingling.", visualImage:visualImage11}
]

class projectKnowel extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
    };
  }

  //  componentWillMount() {
  //   window.scrollTo(0, 0)
  // }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
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
    if(window.location.href !== "http://localhost:3000/projectKnowel#1" ){
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
    console.log(loading)
    console.log(data[1], 'pageRender');
    if(loading === true) {
      console.log("Loading")
      return(
        <div className="animationContainer"> <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div></div>);
    }
    return (
      <SectionsContainer {...options}>
      <Section >
       <div className="introContainer">
          <div className="projectInfoTextContainer">
            <h1 className="projectInfoRubrik"> Knowel </h1>
            <h2 className="projectInfoSubRubrik"> A completely new identity<br/> and website.</h2>
            <div className="infoSubContainerContainer">
            <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://vimeo.com/258806888"><h4>Website</h4></a></div>
            <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
            <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2018</h4></div>
            </div>
        </div>
        <div className="readMoreContainer">
          <a href="#2"> <h2 className="readMoreText"> Read More </h2></a>
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

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[5].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[5].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage5} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[6].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[6].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage6} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[7].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[7].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage7} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[8].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[8].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage8} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[9].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[9].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage9} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[10].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[10].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage10} className="visualImage"/>
        </div>
      </Section>

      <Section className="section2">
        <div className="sectionTextContainer">
          <div>
            <h1 className="sectionRubrik">{data[11].sectionRubrik}</h1> 
            <h3 className="sectionText">
            {data[11].sectionText}
            </h3> 
         </div>
        </div>
        <div className="visualImageContainer">
          <img src={visualImage11} className="visualImage"/>
        </div>
      </Section>


      {/*{data.map(data => (this.renderInformation(data)))}*/}

      </SectionsContainer>
      )
  }

    scrolli() {
      console.log(window.location.hostname + "/ww")
      if(window.location.href === window.location.origin +"/#/projectKnowel/#2") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(100vh/12)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#3") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*2)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#4") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*3)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#5") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*4)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#6") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*5)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#7") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*6)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#8") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*7)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#9") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*8)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#10") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*9)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#11") {
        return (
          <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*10)"} }> </div>
          )
      }
      else if(window.location.href === window.location.origin +"/#/projectKnowel/#12") {
        return (
         <a href="#10"> <div className="scrollPart" style={{height:"calc(100%/12)", background:"#5345E4", marginTop:"calc(8.33333vh*11)"} }> </div></a>
          )
      }

    }

    scrollWheel() {
      if(window.location.href !== window.location.origin +"/#/projectKnowel/#1" ){
    return(
      <div>
      
      <div class="scroll"> 
      {this.scrolli()}
      {data.map((data, i) => (
         <a href={"/#/projectKnowel/#"+(i+1)}> <div className="scrollLinks" id={i} style={{height:"calc(100%/12)", background:"#F7E0BC"} }> </div></a>
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

export default projectKnowel;
