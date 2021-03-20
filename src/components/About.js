import React from "react";
import home1 from "../img/home1.png";
//Styled
import { AboutStyle, Description, Image, Hide } from "../styles";
const About = () => {
  return (
    <AboutStyle>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <Hide>
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact me for photography ideas that you have. We will make those
            ideas real.
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="boat" />
      </Image>
    </AboutStyle>
  );
};

export default About;
