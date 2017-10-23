import React, { Component } from 'react';
import './About.css';
import TextLoop from 'react-text-loop';
import arrowImage from './download.svg';
import menuButton from './menu.svg';
import { slide as Menu } from 'react-burger-menu';
import {
  Link
} from 'react-router-dom';
import PostIt from './common/PostIt';



class About extends Component {
  render() {
    return (
      <div className="aboutPageContainer">
        <div className="aboutContainer">
          <Menu 
            right 
            width={ '18%' } 
            customBurgerIcon={ <img className="menuButton" src={menuButton}/> 
            
            }>
              <h1 id="menuNamn"> William Martinsson </h1>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about"><Link to="/about">About </Link></a>
              <a id="contact" className="menu-item" href="/">Contact</a>
              <a id="Behance" className="menu-item" href="https://www.behance.net/William_mae68a">Behance</a>
              <a id="Medium" className="menu-item" href="https://medium.com/@marwil1996">Medium</a>
          </Menu>
          <h1 className="aboutRubrik"> William Martinsson </h1>
          <h2 className="aboutUnderRubrik"> Digital Designer </h2>
          <div className="postItAreaContainer"> 
            <PostIt 
              postItRubrik={"Abilites"}
              postItText={"HTML, CSS, Javascript, React, ReactNative, React Redux,Gott Humör, Responsive Design"}
              backgroundColor={"#FFF793"}
            />
            <PostIt 
              postItRubrik={"Programs"}
              postItText={"Sketch, Creative Cloud, Flinto, Genymotion, Github, Sublime, Invision, Keynote"}
              backgroundColor={"#50e3c2"}
            />
            <PostIt 
              postItRubrik={"Currently.."}
              postItText={<p>Student at YRGO Gothenburg <br/><br/> Learning WebGL</p>}
              backgroundColor={"#50e3c2"}
            />
            <PostIt 
              postItRubrik={"Life advice"}
              postItText={<a>https://www.youtube<br/>.com/watch?v=NtFar82S368 </a>}
              backgroundColor={"#FFF793"}
              marginTop={"20%"}
            />
            <PostIt 
              postItRubrik={"Best Joke"}
              postItText={"What is Forrest Gumps Password?"}
              backgroundColor={"#FFF793"}
              textAlign={"center"}
            />

            <PostIt 
              postItRubrik={"Hometown"}
              postItText={"The Smalltown Skara in Västra Götaland"}
              backgroundColor={"#FFF793"}
              textAlign={"center"}
            />
            <PostIt 
              postItRubrik={"Currently Reading"}
              postItText={<p>Design As Art<br/>The Wise Mans- Fear<br/>Bauhaus–History</p>}
              backgroundColor={"#FFF793"}
            />
            <PostIt 
              postItText={"1forest1"}
              backgroundColor={"#ddedff"}
              textAlign={"center"}
              marginTop={"-20%"}
              zIndex={0}
            />
            <PostIt 
              postItRubrik={"Favourite Intrest"}
              postItText={<p><span style={{textDecoration: "line-through"}}>Reading</span><br/><span style={{textDecoration: "line-through"}}>Overwatch</span><br/>Soccer</p>}
              backgroundColor={"#FFF793"}
            />

            <PostIt 
              postItRubrik={"Favourite Books"}
              postItText={<p>The Hobbit<br/>Winter Dreams<br/>Thinking With Type</p>}
              backgroundColor={"#FFF793"}
            />


          </div>
          <div className="footerContainer2"> 
            <div className="footerLinkContainer">
              <h1 className="footerLinkText"> 
              <Link to="/">  Home</Link><br/>
                Contact </h1>
            </div>
            <div className="footerContactContainer">
              <h2 className="footerContactText"> William Martinsson
              <br/> 0768023804
              <br/> William_martinsson@hotmail.com </h2>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default About;
