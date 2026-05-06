import './App.css';
import Products from './pages/Products';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SafetyTips from './pages/SafetyTips';
import AboutUs from './pages/AboutUs';
// import CartPage if you have it

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/safety-tips" element={<SafetyTips/>} />
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>

    </Router>
  );
}

export default App;