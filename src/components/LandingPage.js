import React, { Component } from 'react';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import {ScrollToTopOnMount ,SectionsContainer, Section} from 'react-fullpage';
import {
  Link
} from 'react-router-dom';
import About from './About';
import ProjectPage from './ProjectPage';

var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1
    };

    let options = {
      sectionClassName:     'section',
      anchors:              ['/#Home', '/#Projects', '/#About','/#Skills'],
      scrollBar:            false,
      navigation:           false,
      lockAnchors: false,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '0', // the section top padding 
      sectionPaddingBottom: '0', // the section bottom padding 
    };

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      nav: "navigation",
      app: "App"

    };
  };

  pageRender() {
    return(
      <SectionsContainer {...options} className={this.state.app}> 
        <Section className="landingPageContainer">
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Quick Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <a activeClass="active" className="arrowContainer" href="#Projects">
            <img className="downArrow bounce" src={arrowImage} alt="down arrow"/>
          </a>
        </Section>
        <Section>
        <ProjectPage/>
        </Section>
        <Section>
         <About/>
         </Section>
         <Section>
          <div className="footerContainer"> 
            <h1 className="largeContactMeButton" style={{textAlign:"center",position:"absolute", fontFamily: "Poppins, sans-serif"}}> <a href="https://williammartinsson.typeform.com/to/grsvRk">Contact Me!</a> </h1>
            <div className="footerLinkContainer">
              <h2 className="footerLinkText"> 
               <a href="https://medium.com/@marwil1996">Medium</a>
               <a style={{padding:"30px"}} href="https://williammartinsson.typeform.com/to/grsvRk">Contact</a></h2>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"><a href="https://www.behance.net/William_mae68a">Behance</a>
               <a style={{padding:"30px"}} href="https://github.com/Marwil96">Github</a> </h2>
            </div>
          </div>
    </Section>
      </SectionsContainer>
      )
  }



  render() {
    return (
      <div>
      {/*<h1 className="menuText">
        <span >01</span>/
        <span><Link activeClass="active" to="projectPage" spy={true} smooth={true} duration={500}>02</Link></span>/
        <span><Link activeClass="active" to="AboutPage" spy={true} smooth={true} duration={500}>03</Link></span>
      </h1> */}
 
        {this.pageRender()}
      </div>
    );
  }
}

export default LandingPage;
