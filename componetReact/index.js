// import React from "react";
// import ReactDOM from 'react-dom';

// var React = require('react'); 

// //insted of require we use import module

//  import React from 'react';
//  // var ReactDOM = require('react-dom');

//  import ReactDOM from 'react-dom';

// //this is single render elements inside reactdom.render

// // ReactDOM.render('kya dikhna hain / what to show ', ' kaha dikhana hai / where to show', 'callback func');
// ReactDOM.render(<h1> Hello world!</h1>,
//    document.getElementById("root"));

// // this is multiple  render elements inside reactdom.render

// import React from "react";
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <div> 
//   <h1> react of render</h1>,
//   <p> this is saurbh gupta </p>
//   <h2> this is h2 </h2>
//   </div>,
//   document.getElementById("root"));

// // React Fragment in react js


// import React from "react";
// import ReactDOM from 'react-dom';
//  ReactDOM.render(
//    <React.Fragment>
//      <h1> this is fragment</h1>
//      <p1> how to use fragmne</p1>
//      <h2> this is fragment</h2>
//    </React.Fragment>,
//    document.getElementById("root")
//  );

//  //jsx challenge 1

// 1. create a react app from scratch
// 2. Add one h1 elemet in it
// 3. add one p elemet in it
// 4. Add list of fav 5 Netflix Series in it using in order list


// import React from "react";
// import ReactDOM from 'react-dom';
//  ReactDOM.render(
//    <>
//      <h1> Netflix Pickup Series </h1>
//     <p> List of Best Series.</p>
//     <ol>
//       <li> Dark </li>
//       <li> Stranger Things </li>
//       <li> Money Hiest</li>
//       <li> Squide Game </li>
//       <li> Delhi Crime</li>
//     </ol>

//    </>,
//    document.getElementById("root")
//  );

// JavaScript Expressions in JSX in ReactJs


// import React from "react";
// import ReactDOM from 'react-dom';
//  const flname = " sauabh gupta";
//  ReactDOM.render(
//    <>
//      <h1> my name is {flname} </h1>
//      <p> my lucky number is {Math.random()}</p>
//    </>,
//    document.getElementById("root")
//  );

// JS Challenge #2

// 1. create a react app from scratch
// 2. Add one h1 elemet ex Your name
// 3. add one p elemet with Current Date
// 4. add one p elemet with Current Time


// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Saurabh";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1> hello, my name is {name}</h1>
//     <p> Current Date is = {currDate}</p>
//     <p> Current Time is = {currTime}</p>
//   </>,
//   document.getElementById("root")
// );


// //  HTML Attribute Vs JSX Attribute in React

// import React from "react";
// import ReactDOM from "react-dom";

// const name = "saurabh";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

// const links ="https://www.indiabix.com/";

// ReactDOM.render(
//  <>
//   <h1 contentEditable="true">  my name is {name}</h1>
//   <img src={img1} alt ="randomimages" />
//   <img src={img2} alt ="randomimages" />
//   <a href={links} target="_blank">
//      <img src={img3} alt ="randomimages" />
//   </a>
 
//   </>,
//   document.getElementById("root")
// );

 // CSS Styling & Importing CSS Files in React JS

//  import React from "react";
// import ReactDOM from "react-dom";

// import './index.css';
// const name = "saurabh";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

// const links ="https://www.indiabix.com/";

// ReactDOM.render(
//  <>
//   <h1 className="heading" >  my name is {name}</h1>
  
//   <div className="img_div"> 
//   <img src={img1} alt ="randomimages" />
//   <img src={img2} alt ="randomimages" />
//   <a href={links} target="_blank">
//      <img src={img3} alt ="randomimages" />
//   </a>
//   </div>
//   </>,
//   document.getElementById("root")
// );

// // now we add index.css code

// .heading{
//   color: blue;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: burlywood;
// } 


// .img_div{
//   width: 250px;
//   height: 50px;
  
// }
// .img_div img {
//    display: flex;
//    justify-content: center;
// }

// React Challenge #3
 
// 1. Crete a react app from scratch

// 2. show a heading that says hello setInterval, good morning , if time is between 1 to 11 Am 
// 3. good afternoon , if 12 pm to 7 pm 
// 4. good night, if 7pm to till midnight
// 5. apply css in it , then dynamically change the color of greeting parts only inline css style , ex - good morning

// import React from "react";
//  import ReactDOM from "react-dom";

// //import "./index.css";

// let curDate = new Date();
// curDate = curDate.getHours(2021, 10, 20, 13);
// let greeting ="";
// const cssStyle ={};

// if(curDate >= 1 && curDate <12){
//  greeting ='Good Morning';
//  cssStyle.color ="green";
// }else if (curDate>=12 && curDate <19){
//   greeting ="Good Afternoon";
//   cssStyle.color ="blue";
// }else{
//   greeting=" Good Night";
//   cssStyle.color ="black";
// }

// ReactDOM.render(

//   <h1> 
//     Hello Sir, <span style={cssStyle}></span>
//    </h1>,
//   document.getElementById("root")
// );


// React Components 

 // functional componets

 import React from "react";
 import ReactDOM  from "react-dom";
 import App from './App';
 
  ReactDOM.render(<App />, document.getElementById("root")
 );
