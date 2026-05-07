import './App.css';
import './Contact.css';
import './Safety.css';
import './About.css';
import './Cart.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Products from './pages/Products';
import Header from './components/Header';
import CartPage from './pages/CartPage'; 

import SafetyTips from './pages/SafetyTips';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {

  
  const [cart, setCart] = useState([]);

  return (
    <Router>

      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart} />} />

        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

          
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>

    </Router>
  );
}

export default App;