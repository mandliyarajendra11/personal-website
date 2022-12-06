import './App.css';
import Header from './Header';
import Hero from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import Project from './Project';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Services';
const App = ()=>{
  return (
    <>
  <  BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header/>
  <Routes>
    <Route path='/' element={ <Hero/>}/>
    <Route path='about' element={ <About/>}>
        <Route path='services' element={<Services/>}/>
    </Route>
    <Route path='skills' element={ <Skills/>}/>
    <Route path='project' element={ <Project/>}/>
    <Route path='contact' element={ <Contact/>}/>  
    </Routes>
  </BrowserRouter>
    </>
    )
  }
export default App;
