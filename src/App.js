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

import './style.css'

function App() {
  return (
    <BrowserRouter>
    <NavBar2 />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add" element={<FormAddEdit />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/update/:id" element={<FormAddEdit />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/detail/:id" element={<Detail />} /> {/* Sử dụng Route component để truyền match props */}
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