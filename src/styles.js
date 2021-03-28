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
`;

export const Description = styled(motion.div)`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.image`
  flex: 1;
  z-index: 3;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
