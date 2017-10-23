import React, { Component } from 'react';
import '../Components.css';
import Slider from 'react-slick';

const SliderBox = ({ projectBoxRubrik, projectBoxUnderRubrik, projectBoxText }) =>{
  return (
    <div className="sliderContainer project2">
      <h1 className="projectBoxRubrik">{projectBoxRubrik}</h1>
      <h2 className="projectBoxUnderRubrik">{projectBoxUnderRubrik}</h2>
      <h3 className="projectBoxText">{projectBoxText}</h3>
    </div>
  );
}

export default SliderBox;
