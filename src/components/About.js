import React, { Component } from 'react';
import './About.css';
import {Section} from 'react-fullpage';



class About extends Component {
  render() {
    return (
        <div className="aboutContainer">
          <div className="aboutTextContainer"> 
            <h1 className="h1TextStyle"> About </h1>
            <p className="pTextStyle"> I’m William Martinsson, a 21 years old Digital Designer who knows how to code from Gothenburg, Sweden. I’m currently studying digital design at YRGO. <br/><br/>
          I can deliver the entire package from start to finish through my love for design while still having the ability to produce some nice looking code.
          </p>
          <p className="pTextStyle">Driven by my passion for digital, I try to learn and discover new things every day to create unique products & experiences. I constantly seek to reach feelings and emotions by giving much importance to the user experience. My eternal goal is to build products people love to use.</p>
          </div> 
          <div className="shortInformationContainer"> 
            <h1 className="h1TextStyle"> WorkFlow + Mah Life </h1>
            <div className="shortInformationTextContainer"> 
              <h2 className="shortInformationHeader">Frameworks Of Choice</h2>
              <p className="shortInformationText">React, React Native</p>
            </div>
            <div className="shortInformationTextContainer"> 
              <h2 className="shortInformationHeader">Design Tools</h2>
              <p className="shortInformationText">Sketch, Invision, Framer, Creative Cloud and Pen and Paper</p>
            </div>
            <div className="shortInformationTextContainer"> 
              <h2 className="shortInformationHeader">Favourite Fonts</h2>
              <p className="shortInformationText">Poppins & Roboto</p>
            </div>
            <div className="shortInformationTextContainer"> 
              <h2 className="shortInformationHeader">Favourite Podcasts</h2>
              <p className="shortInformationText">HeavyWeight & High Resolution</p>
            </div>
          </div> 
        </div>
    );
  }
}

export default About;
