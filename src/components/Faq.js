import React from "react";
import { AboutStyle } from "../styles";
import styled from "styled-components";
const Faq = () => {
  return (
    <FaqSec>
      <h2>
        Any questoins <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Where do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatibus.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do I improve?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatibus.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Is it easy?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatibus.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
