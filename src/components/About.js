import Button from "./Button";
import Underline from "./Underline";
import { useState } from 'react';


const About = () => {
  const [resume, setResume] = useState(false);
  const toggleResume = () =>{
    setResume(true)
  }

  const goneResume = () =>{
    setResume(false)
  }

  return  (
      <div className="about" id="about">
        <div className="about-img">
          <img src="../img/avatar-dunsin.png" alt="" />
        </div>
        <div className="about-text">
            <h2>About Me</h2>
            <Underline/>
            <p>I am a Web Developer with over one year experience in using Html, CSS, JavaScript and other frameworks such as BootStrap and ReactJs.</p><br />
            <p>I am  also learning NodeJs as a Back-End tool</p>
            <div className="btn-about">
            <a href="https://www.linkedin.com/in/damilola-james-790bb7187/"><Button img={`../img/linkedin.svg`}  value="Linkedin"/></a>
            <a href="#"><Button img={`../img/cloud-arrow-down-fill.svg`}  value="Resume"/></a>
            </div>
        </div>
      </div>
  )
};

export default About;
