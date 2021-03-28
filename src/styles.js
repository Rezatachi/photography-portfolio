import styled from "styled-components";
import { motion } from "framer-motion";
//Styled Components <-- you can use style.js for universal styled components that are always used.
export const AboutStyle = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 4rem 2rem;
    text-align: center;
    button {
      margin-bottom: 2rem;
    }
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.image`
  flex: 1;
  z-index: 5;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    width: 65%;
    height: 40vh;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
