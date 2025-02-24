import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

import Services from "./Services";
import Content from "./Content";
const App = () => {
  return (
    <>
      {/* <  BrowserRouter basename={process.env.PUBLIC_URL}> */}
      {/* <Header />  */}
      <Hero />
      <About />
      <Services />
      <Content />
      <Skills /> 
      <Project />
       <Contact />
    </>
  );
};
export default App;
