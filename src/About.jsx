import React from "react";
import profile from './raj2.jpg'
import { AboutInfo } from './AboutInfo';
export const About = () => {
  return (
    <div className='about'>
        <div className="grid">
        <img src={profile} alt="raju" className='background-2' />
        <AboutInfo/> 
           </div>
    </div>
  )
}
