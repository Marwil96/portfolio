import React, { Component } from 'react';
import logo from '../logo.svg';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import menuButton from './menu.svg';

var pageOrientation = 0;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {pageState: 1};
  }
  animateDown() {

      if(this.state.pageState === 1){
      return 'landingPageContainer'
      }
      else if(this.state.pageState === 2) {
        return 'landingPageContainer moveDown'
      }
    
    console.log('wop')
  }
  animateMenu() {
        if(this.state.pageState === 3) {
        return 'topMenuContainer'
      }
      else {
        return 'topMenuContainer moveToMeny'
      }
  }
  animate() {
    if(this.state.pageState === 1) { 
      this.setState({pageState: 2});
      console.log('arrow')
    }
  }
  animateMeny(){

    if(this.state.pageState === 1) { 
      this.setState({pageState: 3});
      
    }
  }

  render() {
    return (
      <div className="App">
      <div className={this.animateMenu()}> </div>
        <div className={this.animateDown()}>
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <div className="arrowContainer">
            <img className="downArrow bounce" src={arrowImage} onClick={this.animate.bind(this)}/>
          </div>
          <div className="menuContainer">
            <img className="menuButton" src={menuButton} onClick={this.animateMeny.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
