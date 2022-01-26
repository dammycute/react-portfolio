import Button from "./Button";
import Underline from "./Underline";


const About = () => {
  return  (
      <div className="about" id="about">
        <div className="about-img">
          <img src="../img/avatar-dunsin.png" alt="" />
        </div>
        <div className="about-text">
            <h2>About Me</h2>
            <Underline/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam inventore eveniet ex rerum quo iure velit iusto quae quia.</p><br />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem veniam eligendi ipsa beatae officiis consequatur quaerat dolor</p>
            <div className="btn-about">
            <a href="https://www.linkedin.com/in/damilola-james-790bb7187/"><Button img={`../img/linkedin.svg`}  value="Linkedin"/></a>
            <a href="#"><Button img={`../img/cloud-arrow-down-fill.svg`}  value="Resume"/></a>
            </div>
        </div>
      </div>
  )
};

export default About;
