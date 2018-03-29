import React, { Component } from 'react';
import './Components.css';
import {
  Link
} from 'react-router-dom';
import Slider from 'react-slick';
import {Element} from 'react-scroll';
import firstImage from '../img/KnowelMacbookMockup.png';
import secondImage from '../img/ThriveMobilMockup.png';
import thirdImage from '../img/KnowelMacbookMockup.png';
var data = [
  {projectBoxRubrik:"Knowel", projectBoxText:"A completely new identity & website",color:"#FDD8BB", backgroundColor:"#5345E4", image:firstImage, link:"/projectKnowel#1", subject:"Developer & Design", id:"dator"},
  {projectBoxRubrik:"Thrive", projectBoxText:"Make a campain site", color:"#AEF2F0", backgroundColor:"#263776", image:secondImage, link:"/projectThrive", subject:"Design", id:"mobil"},
  {projectBoxRubrik:"Concept Site", projectBoxText:"How to use flinto", color:"#172AD8", backgroundColor:"#80BBE5", image:thirdImage, link:"/projectStarvation", subject:"Design", id:"dator"},
]
let dragging = false;
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}
var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1.3,
      swipe: true,
      swipeToSlide: true,
       beforeChange: () => dragging = true,
      afterChange: () => dragging = false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, centerMode:true, infinite: true, initialSlide: 0 } }, { breakpoint: 360, settings: { slidesToShow: 1,centerMode:true, infinite: true, initialSlide: 0 } }]
    };
console.log("project")
class ProjectPage extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  toProjectPage() {
    <Link to="/somewhere"/>
    console.log("toProjectPage")
  }
  sliderContainerCreator(data) {
    var i;
      return(
         <Link to={data.link} className="sliderContainer projectx1" onClick={(e)=> dragging && e.preventDefault()}>
              <div style={{backgroundColor:data.backgroundColor}} className="slideContainerColor">
                <h3 style={{color:data.color}} className="projectBoxMinorRubrik"> {data.subject} </h3>
                <h1 style={{color:data.color}} className="projectBoxRubrik">{data.projectBoxRubrik}</h1>
                <h2 style={{color:data.color}} className="projectBoxUnderRubrik">Show my self</h2>
                <h3 style={{color:data.color}} className="projectBoxText">{data.projectBoxText}</h3>
              </div>
              <img className="projectPageImage" id={data.id} src={data.image}/>
              <div className="compMockup">
               </div>
            </Link>
      
        )
    }
  

  render() {
    return (
      <Element name="projectPage" className="projectPageContainer">
          <h1 className="projectSubheaderText ">
          <span className="projectSubheader projectSubheaderColor2" onClick={this.toProjectPage}> Projects </span></h1>

          <Slider {...settings} className="slider">
         
            {data.map(data => (this.sliderContainerCreator(data)))}
          </Slider>
          
        </Element>
    );
  }
}

export default ProjectPage;
