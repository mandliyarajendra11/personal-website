import React from 'react';
import { NavLink } from 'react-router-dom';
import './component.css';
import { useEffect,useState } from "react";

const Header = () => {

  


  const [arrow,setArrow]=useState("uil-arrow-down");
  function display() {
    var li= document.querySelector('.nested-ul-1');
    if(li.style.display==="none"){ 
      li.style.display="block";
      setArrow('uil-arrow-down');
      let i = document.querySelector('.uil-arrow-down');
    i.className=arrow;
  }
   else{
   li.style.display="none";
   setArrow('uil-arrow-up');
   let i = document.querySelector('.uil-arrow-up');
    i.className=arrow;
   }
  }

  const [theme,setTheme]=useState("light-mode");
  const [themes,setThemes]=useState("bx bxs-moon");
  const themeChange=()=>{
      if(theme==="dark-mode"){
        setTheme('light-mode')
        setThemes('bx bxs-sun');
        let Change=document.querySelector('.bxs-sun')
        Change.className=themes;
      }
        else{
        setTheme('dark-mode');
        setThemes('bx bxs-moon');
       let Change=document.querySelector('.bxs-moon')
         Change.className=themes;
        
      }
      };
      useEffect(()=>{
        document.body.className=theme;
       },[theme]);

  return (
   <header className="header bx-border-bottom">
    <h3>Portfolio</h3>   
    <ul className="nav">
      <li><NavLink to={`/`}><i className="uil uil-estate nav-icon"></i><span  className='nav-active'>home</span></NavLink></li>
      <li><NavLink to={`about`}><i className="uil uil-head-side nav-icon"></i><span>about</span></NavLink></li>
      <li><NavLink to={`skills`}><i className="uil uil-brackets-curly nav-icon"></i><span>skills</span></NavLink></li>
      <li><NavLink to={`project`}><i className="uil uil-presentation-play nav-icon"></i><span>projects</span></NavLink></li>
      <li><NavLink to={`contact`}><i className="uil uil-message nav-icon"></i><span>contact</span></NavLink></li>
      <li className='li' onClick={()=>{display()}} >coding profile <i class='bx uil-arrow-down'></i> 
        <ul className='bx-border-up-none nested-ul-1'>
          <li><a href='https://leetcode.com/rajendramandliya11/' target='_blank' rel='noreferrer'>leetcode</a></li>
          <li><a href='https://auth.geeksforgeeks.org/user/mandliyarajendra11/practice' target='_blank' rel='noreferrer'>GFG</a></li>
        </ul>
        </li>
    </ul>   
    <button className='btn' onClick={()=>{themeChange()}}><i className="bx bxs-moon"></i></button>
   </header>
  )
}

export default Header