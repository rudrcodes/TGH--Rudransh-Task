// import "./App.css";
import "./style.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
import React from "react";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="bookmarks" element={<Bookmarks />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
