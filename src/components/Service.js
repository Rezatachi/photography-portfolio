import React from "react";
//Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { AboutStyle, Description, Image } from "../styles";
import styled from "styled-components";
const Service = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(AboutStyle)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
// With styled components, you are able to transfer the styled components over and rename it.
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
`;
export default Service;
