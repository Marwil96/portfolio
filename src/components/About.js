import React, { Component } from 'react';
import './About.css';
import {Section} from 'react-fullpage';



class About extends Component {
  render() {
    return (
        <div className="aboutContainer">
              <h1 className="textWindowRubrik" style={{textAlign:"center"}}> currently </h1>
          <div className="aboutTextContainer"> 
            <h1 className="h1TextStyle"> About </h1>
            <p className="pTextStyle"> I’m William Martinsson, a 21 years old Digital Designer who knows how to code from Gothenburg, Sweden. I’m currently studying digital design at YRGO. <br/><br/>
          I can deliver the entire package from start to finish through my love for design while still having the ability to produce some nice looking code.
          </p>
          <p className="pTextStyle">Driven by my passion for digital, I try to learn and discover new things every day to create unique products & experiences. I constantly seek to reach feelings and emotions by giving much importance to the user experience. My eternal goal is to build products people love to use.</p>
          </div>  
        </div>
    );
  }
}

export default About;
