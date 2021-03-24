import React from "react";
//Page components
import About from "../components/About";
import Service from "../components/Service";
import Faq from "../components/Faq";
//Framer animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
const AboutSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/* Empty div */}
      <About />
      <Service />
      <Faq />
    </motion.div>
  );
};

export default AboutSection;
