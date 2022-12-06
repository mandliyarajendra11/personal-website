import React from "react";
import projectApi from "./projectApi";

const Project = () => {
  return (
    <div className="project">
       <h3 className="headline">my work</h3>
       <div class="fea">
         {
          projectApi.map((item,i)=>{
         return(   
        <div className="div bx-border">
        <img src={item.img} alt={"project"+i} key={i} />
        <h4>{item.headline}</h4>
        <p>{item.des}</p>
        <div className="flex">
        <button className="btn"><a href={item.url} target="_blank" rel="noreferrer"><i class="uil uil-github"></i>  github</a></button>
        <button className="btn"><i class="uil uil-youtube"></i> youtube</button></div>
        </div>
          )})
        }
        </div>
      </div>
  );
};

export default Project;
