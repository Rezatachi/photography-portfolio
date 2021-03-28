import React from "react";
import { AboutStyle } from "../styles";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../Animation";
//Reusuable component
import { useScroll } from "./useScroll";
import Toggle from "./Toggle";
const Faq = () => {
  const [element, controls] = useScroll();
  return (
    <FaqSec variants={fade} ref={element} animate={controls}>
      <h2>
        Any questoins <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
                quos.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How Do I Improve?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
                quos.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Is It Easy?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
                quos.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqSec>
  );
};

const FaqSec = styled(AboutStyle)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;
export default Faq;
