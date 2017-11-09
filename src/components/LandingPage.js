import React, { Component } from 'react';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import { Element, Link} from 'react-scroll';
import About from './About';
import ProjectPage from './ProjectPage';

var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4
    };

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true

    };
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
      <div className={"App"}> 
      <h1 className="menuText">
        <span><Link activeClass="active" to="LandingPage" spy={true} smooth={true} duration={500}>01</Link></span>/
        <span><Link activeClass="active" to="projectPage" spy={true} smooth={true} duration={500}>02</Link></span>/
        <span><Link activeClass="active" to="AboutPage" spy={true} smooth={true} duration={500}>03</Link></span>
      </h1>
        <Element name="LandingPage" className="landingPageContainer">
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <Link activeClass="active" className="arrowContainer" to="projectPage" spy={true} smooth={true} duration={500} >
            <img className="downArrow bounce" src={arrowImage} alt="down arrow"/>
          </Link>
        </Element>
        <ProjectPage/>
         <About/>
          <div className="footerContainer"> 
            <div className="footerLinkContainer">
              <h2 className="footerLinkText"> 
               <a href="https://medium.com/@marwil1996">Medium</a><br/>
               <a href="https://williammartinsson.typeform.com/to/grsvRk"> Contact </a></h2>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"><a href="https://www.behance.net/William_mae68a"> Behance</a>
              <br/> <a href="https://github.com/Marwil96">Github</a> </h2>
            </div>
          </div>
      </div>
      )
  }

componentDidMount() {
  setTimeout(() => this.setState({ loading: false }), 1000);
}

  render() {
    return (
      <div>
        {this.pageRender(this.state.loading)}
      </div>
    );
  }
}

export default LandingPage;
