import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Contact';


import Home from './Home';
import Aboutus from './Aboutus';
import Product from './Product';
import Contact from './Contact';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Single-page-app-reactjjs">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>

      </BrowserRouter>
      {/* 
      <Home />
      <Product />
      <Contact /> */}

    </div>
  );
}

export default App;
