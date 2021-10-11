import React from "react";
import ReactDOM from 'react-dom';

var React = require('react'); 

//insted of require we use import module

 import React from 'react';
 // var ReactDOM = require('react-dom');

 import ReactDOM from 'react-dom';

//this is single render elements inside reactdom.render

// ReactDOM.render('kya dikhna hain / what to show ', ' kaha dikhana hai / where to show', 'callback func');
ReactDOM.render(<h1> Hello world!</h1>,
   document.getElementById("root"));
