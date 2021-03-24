import React from "react";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";
//Styled
import { AboutStyle, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
const About = () => {
  //Framer Motion Variants

  return (
    <AboutStyle>
      <Description>
        <motion.div classname="title">
          <div className="hide">
            {/* You still need to state the propety of how to animate it */}
            <motion.h2>We work to make</motion.h2>
          </div>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
          <p>
            Contact us for photography ideas that you have. We will make those
            ideas real.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt="boat" />
      </Image>
    </AboutStyle>
  );
};

export default About;
