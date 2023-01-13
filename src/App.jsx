import "./App.css";
// import "./style.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
import React from "react";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="bookmarks" element={<Bookmarks />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
