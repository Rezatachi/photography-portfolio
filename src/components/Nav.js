import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">
            <a href="/">About Us</a>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initia={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0" }}
            // Here it is stating that if the pathname is equal to the link we are in, animate it  as the active one.
          />
        </li>

        <li>
          <Link to="/work">
            <a href="/">Our Work</a>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initia={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0" }}
            // Here it is stating that if the pathname is equal to the link we are in, animate it  as the active one.
          />
        </li>
        <li>
          <Link to="/contact">
            <a href="/">Contact Us</a>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initia={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0" }}
            // Here it is stating that if the pathname is equal to the link we are in, animate it  as the active one.
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
    font-weight: 900;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem 0rem 1rem 0rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      font-size: 2rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 55%;
  @media (max-width: 1300px) {
    left: 0;
  }
`;
export default Nav;
