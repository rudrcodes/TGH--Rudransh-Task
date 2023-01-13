import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

export const Navbar = () => {
  const Navbar = styled.nav`
    width: 98vw;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    & a {
      font-family: "Poppins";
      color: #fff;
      text-decoration: none;
      font-size: 2.3rem;
      &:hover {
        text-decoration: underline;
        /* color: #ffffff; */
      }
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  `;
  return (
    <div>
      <Navbar>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? 700 : "lighter",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/bookmarks"
          style={({ isActive }) => ({
            fontWeight: isActive ? 700 : "lighter",
          })}
        >
          Bookmarks
        </NavLink>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/bookmarks">Go to My Bookmarks</Link> */}
      </Navbar>
    </div>
  );
};
