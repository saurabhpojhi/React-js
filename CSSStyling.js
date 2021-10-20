// CSS Styling & Importing CSS Files in React JS

 import React from "react";
import ReactDOM from "react-dom";

import './index.css';
const name = "saurabh";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

const links ="https://www.indiabix.com/";

ReactDOM.render(
 <>
  <h1 className="heading" >  my name is {name}</h1>
  
  <div className="img_div"> 
  <img src={img1} alt ="randomimages" />
  <img src={img2} alt ="randomimages" />
  <a href={links} target="_blank">
     <img src={img3} alt ="randomimages" />
  </a>
  </div>
  </>,
  document.getElementById("root")
);
