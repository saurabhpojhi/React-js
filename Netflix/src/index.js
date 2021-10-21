import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Componets/Card";
import "./index.css";
import sdata from './sdata';


ReactDOM.render(
  <>

     <h1 className="heading_style"> List of Top 5 Netflix Original Series 2021</h1>

   {sdata.map((val)=>{
     return(
      <Card
            key={val.id}
            imgsrc={val.imgsrc}
            sname={val.sname}
            title={val.title}
            link={val.link}
          />
      ); 

   })}
   
  </>,
  document.getElementById('root')
);