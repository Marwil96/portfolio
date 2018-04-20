import React, { Component } from 'react';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from '../img/Arrow.svg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import About from './About';
import ProjectPage from './ProjectPage';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      nav: "navigation",
      app: "App"

    };
  };
  changeBackgroundColor() {
    this.setState({ app: "b" })
  }
  pageRender() {
    return(
      <div> 
        <Element name="landingPage" className="landingPageContainer newContainer">
        <h1 style={{position:"absolute", color:"#5245e5", fontSize: "14px", left:"10%",top:"4%", width:"40%", fontFamily: 'Roboto Mono', fontWeight: 400}}> William Martinsson - Digital Designer </h1>
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Quick Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <Link to="projectPage" activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="arrowContainer">
            <img style={{heigth:"50px"}} className="downArrow bounce" src={arrowImage} alt="down arrow"/>
          </Link>
        </Element>
        <Element name="projectPage" onSetActive={this.changeBackgroundColor} >
        <ProjectPage/>
        </Element>
        <div className="newContainer">
         <About/>
         </div>
         <div className="newContainer">
          <div className="footerContainer"> 
            <h1 className="largeContactMeButton" style={{textAlign:"center",position:"absolute", fontFamily: "Poppins, sans-serif"}}> <a href="https://williammartinsson.typeform.com/to/grsvRk">Contact Me!</a> </h1>
            <div className="footerLinkContainer">
              <h2 className="footerLinkText"> 
               <a href="https://medium.com/@marwil1996">Medium</a>
               <a className="paddingNormal" href="https://williammartinsson.typeform.com/to/grsvRk">Contact</a></h2>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"><a href="https://www.behance.net/William_mae68a">Behance</a>
               <a className="paddingNormal" href="https://github.com/Marwil96">Github</a> </h2>
            </div>
          </div>
    </div>
      </div>
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
