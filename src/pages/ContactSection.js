import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
const ContactUs = () => {
  return (
    <Contactdiv
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us</h1>
      <button>HERE</button>
    </Contactdiv>
  );
};

const Contactdiv = styled(motion.div)`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #fff;
    font-weight: 900;
    font-size: 5rem;
    letter-spacing: 2rem;
  }
  button {
    margin: 2rem;
  }
`;

export default ContactUs;
