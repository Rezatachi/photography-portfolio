import React from "react";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";
//Styled
import { AboutStyle, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";
import Wave from "./Wave";
const About = () => {
  //Framer Motion Variants

  return (
    <AboutStyle>
      <Description>
        <motion.div classname="title">
          <Hide>
            {/* You still need to state the propety of how to animate it */}
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for photography ideas that you have. We will make those
            ideas real.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact Us</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="boat" />
      </Image>
      <Wave />
    </AboutStyle>
  );
};

export default About;
