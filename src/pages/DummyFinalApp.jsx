import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
import React from "react";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";
// const Cont = styled.div`
//   background-color: red;
//   height: 100vh;
//   position: relative;
// `;
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Cont> */}
        <Navbar />
        {/* </Cont> */}
        <Routes>
          <Route exact path="bookmark" element={<Bookmarks />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
