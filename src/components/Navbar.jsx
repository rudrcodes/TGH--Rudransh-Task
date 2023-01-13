import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Navbar = () => {
  const Navbar = styled.nav`
    border-radius: 10px;
    padding: 10px;
    height: 3rem;
    /* min-width:50%; */
    margin-bottom: 20px;
    background-color: #ffb703;
    border: 3px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & a {
      font-family: "Roboto", sans-serif;

      font-weight: bolder;
      color: #000;
      transition: all 250ms ease-in-out;
      text-decoration: none;
      font-size: 1.3rem;
      &:hover {
        text-decoration: underline;
        color: #000000c0;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  `;
  return (
    <div>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Go to My Bookmarks</Link>
        {/* <br /> */}
      </Navbar>
    </div>
  );
};
