import React, { Component } from 'react';
import '../About.css';

const PostIt = ({ postItRubrik, postItText, backgroundColor, marginTop, textAlign, zIndex }) =>{
  return (
    <div className="postItContainer" style={{backgroundColor:backgroundColor, marginTop: marginTop, zIndex: zIndex}}>
      <h1 className="postItRubrik">{postItRubrik}</h1>
      <h3 className="postItText" style={{textAlign:textAlign}}>{postItText}</h3>
    </div>
  );
}

export default PostIt;
