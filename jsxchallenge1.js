//jsx challenge 1

1. create a react app from scratch
2. Add one h1 elemet in it
3. add one p elemet in it
4. Add list of fav 5 Netflix Series in it using in order list


import React from "react";
import ReactDOM from 'react-dom';
 ReactDOM.render(
   <>
     <h1> Netflix Pickup Series </h1>
    <p> List of Best Series.</p>
    <ol>
      <li> Dark </li>
      <li> Stranger Things </li>
      <li> Money Hiest</li>
      <li> Squide Game </li>
      <li> Delhi Crime</li>
    </ol>

   </>,
   document.getElementById("root")
 );
