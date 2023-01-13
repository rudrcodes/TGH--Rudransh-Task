import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Navbar = () => {
  const Navbar = styled.nav`
    border: 3px solid #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & a {
      color: #fff;
      transition: all 250ms ease-in-out;
      &:hover {
        color: red;
      }
    }
  `;
  return (
    <div>
      <Navbar>
        <Link to="/bookmark">Go to My Bookmarks</Link>
        <br />
        <Link to="/">Home</Link>
      </Navbar>
    </div>
  );
};
