import React from 'react'
import './component.css'
import './App.css';
import resume from './raj.pdf'
export const AboutInfo = () => {
  return (
    <div className="a">
        <div className='intro'>
        <h2>About me</h2>
        <p>my introduction</p></div>
       <div className='aa'>
       <div className="bx-border"><i class="uil uil-brain "></i><h5>experience</h5><p>frasher</p></div>
       <div className="bx-border"><i className="uil uil-presentation-play "></i><h5>projects</h5><p>30+projects</p></div>
       <div className="bx-border"><i class="uil uil-database"></i><h5>DSA</h5><p>350+problem solved</p></div></div>
       <p >frontend developer, i create web pages with vanila js and react js.</p>
       <button className='btn'><a download="" href={resume}>download resume <i class="uil uil-file-download"></i></a></button>
       </div>
  )
}
