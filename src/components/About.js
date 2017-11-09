import React, { Component } from 'react';
import './About.css';
import { Element} from 'react-scroll';



class About extends Component {
  render() {
    return (
      <Element name="AboutPage" className="aboutPageContainer">
        <div className="aboutContainer">
          <h1 className="aboutRubrik"> William Martinsson </h1>
          <h2 className="aboutUnderRubrik"> Digital Designer </h2>
          <div className="infoWindow"> 
            <div className="textWindow"> 
              <h1 className="textWindowRubrik" style={{marginLeft:"30px"}}> who? </h1>
              <p className="textWindowText" style={{marginLeft:"30px"}}>Young dude from Skara, who has great intrest in digital visualisation. </p>
            </div>
            <div className="textWindow"> 
              <h1 className="textWindowRubrik" style={{textAlign:"center"}}> currently </h1>
              <p className="textWindowText" style={{textAlign:"center"}}>Studying Digital Design At YRGO<br/>Learning WebGL<br/>Working on Reporter </p>
            </div>
            <div className="textWindow"> 
              <h1 className="textWindowRubrik" style={{textAlign:"right", marginRight:"30px"}}> future? </h1>
              <p className="textWindowText" style={{textAlign:"right", marginRight:"30px"}}>Keep learning about the future of the webb</p>
            </div>
          </div>
          <div className="infoWindow invsible" style={{backgroundColor:"#E0BEBE"}}> 
            <div className="textWindow"> 
              <h1 className="textWindowRubrik" style={{marginLeft:"30px"}}> skills </h1>
              <p className="textWindowText" style={{marginLeft:"30px",fontSize:"26px"}}>HTML<br/>CSS<br/>Javascript<br/>React<br/>React Native<br/>React Redux<br/>Responsive Webdesign</p>
            </div>
            <div className="textWindow"> 
              <h1 className="textWindowRubrik" style={{textAlign:"center"}}> programs </h1>
              <p className="textWindowText" style={{textAlign:"center",fontSize:"26px"}}>Sketch<br/>Illustrator<br/>Photoshop<br/>Aftereffects<br/>Flinto<br/>Genymotion<br/>Github<br/>Invision</p>
            </div>
            <div className="textWindow" style={{justifyContent:"center"}}> 
              <h1 className="textWindowContactMe"> <a href="https://williammartinsson.typeform.com/to/grsvRk">contact me</a> </h1>
            </div>
          </div>
      </div>
    </Element>
    );
  }
}

export default About;
