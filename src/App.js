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
import Slideshow from "./components/Slideshow";

import './style/style.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar2 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              {/* <Home /> */}
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<FormAddEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<FormAddEdit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;




// npx create-react-app
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm i react-router-dom
// npm install axios