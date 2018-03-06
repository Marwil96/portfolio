import React, { Component } from 'react';
import './About.css';
import {Section} from 'react-fullpage';



class About extends Component {
  render() {
    return (
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
          </div>
    );
  }
}

export default About;
