import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FormAddEdit from "./components/FormAddEdit";
import NavBar2 from "./components/Navbar2";
import About from "./pages/About";
import Detail from "./components/Detail";

import './style/style.css';
import Slideshow3 from "./components/Slideshow3";
import FullWidthGrid from "./components/info";
// import ResponsiveAppBar from "./components/NavBar";
import NavBar1 from "./components/NavBar";

function App() {
  return (
    <BrowserRouter basename="/daithuanphat"> {/* Set basename to /daithuanphat */}
      {/* <ResponsiveAppBar /> */}
      <NavBar1 />
      <NavBar2 />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<FormAddEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<FormAddEdit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <>
              <Slideshow3 />
              <FullWidthGrid />
              <Home />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
