import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <Contactdiv
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Hide>
        <motion.h1 variants={titleAnimation}>Contact Us</motion.h1>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          {" "}
          <Circle />
          <h2>Send Us the Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />

          <h2>Send Us the Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />

          <h2>Send Us the Message</h2>
        </Social>
      </Hide>
    </Contactdiv>
  );
};

const Contactdiv = styled(motion.div)`
  min-height: 90vh;
  padding: 3rem 10rem;
  h1 {
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 4rem;
    color: black;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
