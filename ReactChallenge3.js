// 1. Crete a react app from scratch

// 2. show a heading that says hello setInterval, good morning , if time is between 1 to 11 Am 
// 3. good afternoon , if 12 pm to 7 pm 
// 4. good night, if 7pm to till midnight
// 5. apply css in it , then dynamically change the color of greeting parts only inline css style , ex - good morning

import React from "react";
 import ReactDOM from "react-dom";

//import "./index.css";

let curDate = new Date();
curDate = curDate.getHours(2021, 10, 20, 13);
let greeting ="";
const cssStyle ={};

if(curDate >= 1 && curDate <12){
 greeting ='Good Morning';
 cssStyle.color ="green";
}else if (curDate>=12 && curDate <19){
  greeting ="Good Afternoon";
  cssStyle.color ="blue";
}else{
  greeting=" Good Night";
  cssStyle.color ="black";
}

ReactDOM.render(

  <h1> 
    Hello Sir, <span style={cssStyle}></span>
   </h1>,
  document.getElementById("root")
);
