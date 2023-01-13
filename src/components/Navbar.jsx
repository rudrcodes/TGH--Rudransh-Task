import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

export const Navbar = () => {
  const Navbar = styled.nav`
    /* position: absolute; */
    /* top: 0%; */
    width: 98vw;
    /* border-radius: 10px; */
    /* padding: 10px; */
    /* height: 3rem; */
    /* min-width:50%; */
    margin-bottom: 20px;
    /* background-color: #ffb703; */
    /* border: 3px solid #000; */
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    /* display: grid; */
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
            // color: isActive ? "greenyellow" : "white",
            fontWeight: isActive ? 700 : "lighter",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/bookmarks"
          style={({ isActive }) => ({
            // color: isActive ? "greenyellow" : "white",
            fontWeight: isActive ? 700 : "lighter",
          })}
        >
          Bookmarks
        </NavLink>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/bookmarks">Go to My Bookmarks</Link> */}
        {/* <br /> */}
      </Navbar>
    </div>
  );
};
