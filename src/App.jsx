import './App.css';
import './Contact.css';
import './Safety.css';
import './About.css';
import './Cart.css';
import './ChatBotIcon.css';
import './ChatBot.css';
import './Product.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Products from './pages/Products';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import CartButton from './components/CartButton';

// import ChatBot from './pages/ChatBot';
import ChatBotIcon from './components/ChatBotIcon';

import SafetyTips from './pages/SafetyTips';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const checkAuth = () => {
      const user = sessionStorage.getItem("currentUser");
      setIsAuthenticated(!!user);
    };
    checkAuth();
    window.addEventListener("login-event", checkAuth);
    return () => window.removeEventListener("login-event", checkAuth);
  }, []);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }

  
  function addToCart(product) {

    const existingItem = cart.find(
      item => item.id === product.id
    );

    if (existingItem) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }

  return (
    <Router>

      <Header cart={cart} />
       
      <ChatBotIcon />

      <CartButton cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={
            <Products addToCart={addToCart} />
          }
        />

        {/* <Route
          path="/chatbot"
          element={<ChatBot />}
        /> */}

        <Route
          path="/safety-tips"
          element={<SafetyTips />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

      </Routes>

    </Router>
  );
}

export default App;