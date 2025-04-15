import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Contact';
import React from "react";


import Home from './Home';
import Aboutus from './Aboutus';
import Product from './Product';
import Contact from './Contact';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>

      </Router>
      {/* 
      <Home />
      <Product />
      <Contact /> */}

    </div>
  );
}

export default App;
