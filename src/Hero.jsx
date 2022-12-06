import React from 'react'
import raj from './raju.jpg'
import './App.css';
import './component.css'
import {useNavigate} from "react-router-dom";
const Hero = () => {
let navigate=useNavigate();
  return (
    <section className='hero'>
       <div className='social'>
       <a href="https://www.instagram.com/rajendramandliya11/" target="_blank"  rel="noopener noreferrer"><i class="uil uil-instagram"></i></a>
      <a href='https://github.com/mandliyarajendra11' target="_blank"  rel="noopener noreferrer"> <i class="uil uil-github-alt"></i></a>
       <a href='https://www.linkedin.com/in/rajendra-mandliya-a83b97256/?trk=public-profile-join-page' target="_blank"  rel="noopener noreferrer"><i class="uil uil-linkedin-alt"></i></a>
       </div>
        <div className='personal'>
        <h5>hemlo gumys😉i'm</h5>
        <h1>rajendra mandliya</h1>
        <p>fronted web developer good in react js 
        <br></br><br></br>& also good knowledge about data stracture and algorithm</p>
        <button className='btn' onClick={()=>{navigate('/contact')}}>message me <i class="uil uil-message"></i></button></div>
        <img src={raj} alt="img" className='background' />
    </section>
  )
}

export default Hero