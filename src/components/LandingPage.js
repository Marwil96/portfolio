import React, { Component } from 'react';
import logo from '../logo.svg';
import './Components.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import menuButton from './menu.svg';
import { slide as Menu } from 'react-burger-menu';

var pageOrientation = 0;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {pageState: 1};
  }
  animateDown() {

      if(this.state.pageState === 1){
      return 'App'
      }
      else if(this.state.pageState === 2) {
        return 'App moveDown'
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
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={this.animateDown()}> 
        <div className="landingPageContainer">
        <Menu 
          right 
          width={ '18%' } 
          customBurgerIcon={ <img className="menuButton" src={menuButton}/> 
          
          }>
            <h1 id="menuNamn"> William Martinsson </h1>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a id="Behance" className="menu-item" href="/contact">Behance</a>
            <a id="Medium" className="menu-item" href="/contact">Medium</a>
      </Menu>
          <div className="rubrikContainer"> 
            <h1> <span className='bigHello'>Hello</span><span className='rubrikText'> <br/> <span className='lowOpacity'>I am a</span> <span className='digitalDesigner'>
            <TextLoop children={["Digital Designer", "Frontend Dev", "Learner", "Arsenal Fan"]} speed={1500} adjustingSpeed={200}/> </span> <br/>
            <span className='lowOpacity'>based in Gothenburg</span></span> </h1>
          </div>
          <div className="arrowContainer">
            <img className="downArrow bounce" src={arrowImage} onClick={this.animate.bind(this)}/>
          </div>

          
        </div>
        <div className="projectPageContainer"> 
          <h1 className="projectRubrik"> Project </h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
