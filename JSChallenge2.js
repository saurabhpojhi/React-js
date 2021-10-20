JS Challenge #2

// 1. create a react app from scratch
// 2. Add one h1 elemet ex Your name
// 3. add one p elemet with Current Date
// 4. add one p elemet with Current Time


import React from "react";
import ReactDOM from "react-dom";

const name = "Saurabh";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1> hello, my name is {name}</h1>
    <p> Current Date is = {currDate}</p>
    <p> Current Time is = {currTime}</p>
  </>,
  document.getElementById("root")
);
