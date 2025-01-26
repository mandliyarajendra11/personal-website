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
        <div className="bx-border"><i class="uil uil-brain "></i><h5>experience</h5><p>2+ Year</p></div>
        <div className="bx-border"><i className="uil uil-presentation-play "></i><h5>projects</h5><p>30+projects</p></div>
        <div className="bx-border"><i class="uil uil-database"></i><h5>DSA</h5><p>500+problem solved</p></div></div>
      <p >Hi, I’m Rajendra Mandliya, a passionate Full-Stack Developer with <b>2+ years</b> of experience in building scalable and efficient web applications. I specialize in <b> React, Node.js, and FastAPI </b>, with expertise in API development, deployment, and performance optimization.
      <p>

        I have a strong foundation in <b> Data Structures and Algorithms, solving 500+ problems on LeetCode </b>, which helps me write optimized and efficient code. Additionally, I have experience <b> leading a team of 5 developers </b>, working on both service-based and product-based projects.
      </p>
      <br/>
<p>

        I’m always eager to learn and explore new technologies. You can also check out my <a href='https://medium.com/@mandliyarajendra1' style={{textDecoration:"underline",color:"blue"}}> technical articles on Medium </a>, where I share insights from my development journey.
</p><br/>
        <p>

        🚀 Let’s build something amazing together!</p>
        </p>
      <button className='btn'><a download="" href={resume}>download resume <i class="uil uil-file-download"></i></a></button>
    </div>
  )
}
