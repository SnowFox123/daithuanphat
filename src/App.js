import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Footer2 from "./components/footer2";
import FormAddEdit from "./components/FormAddEdit";
import NavBar1 from "./components/NavBar";
import NavBar2 from "./components/Navbar2";
import About from "./pages/About";
import Detail from "./components/Detail";
import Slideshow3 from "./components/Slideshow3";
import FullWidthGrid from "./components/info";
import Home2 from "./pages/Home2";

import './style/style.css';

function App() {
  return (
    <BrowserRouter basename="/daithuanphat">
      <NavBar1 />
      <NavBar2 />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<FormAddEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<FormAddEdit />} />
        <Route path="/contact" element={
          <>
            <Contact />
            <Home2 />
          </>
        } />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={
          <>
            <Slideshow3 />
            <FullWidthGrid />
            <Home />
          </>
        } />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
