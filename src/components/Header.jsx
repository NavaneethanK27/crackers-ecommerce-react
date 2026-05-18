import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo/logo.png";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    const handleStorageChange = () => {
      const updatedUser = sessionStorage.getItem("currentUser");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    
    window.addEventListener("login-event", handleStorageChange);
    return () => window.removeEventListener("login-event", handleStorageChange);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("login-event"));
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <div className="top-bar">
        Once order Submitted WhatsApp Us for further updates.
        <span> 8668125458 | 9751660227</span>
      </div>

      <div className="contact-bar">
        <div className="left">
          📧 npcrackers@gmail.com
        </div>
        <div className="right">
          📱 +91 8668125458
        </div>
      </div>

      <div className="main-header">
        <div className="address">
          <h2>Address</h2>
          <p>
            Anuppankulam, Near MSS transport <br />
            Sivakasi, Tamil Nadu 626 189
          </p>
        </div>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

        <div className="info">
          <h3>100% Satisfaction</h3>
          <p>Best quality and timely delivery</p>
        </div>
      </div>

      <div className="menu">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/quick">QUICK PURCHASE</Link>
        <Link to="/safety-tips">SAFETY TIPS</Link>
        <Link to="/contact">CONTACT US</Link>
        {user ? (
          <>
            <span style={{ color: '#ff5722', fontWeight: 'bold', marginLeft: '10px' }}>
              Welcome, {user.name} ({user.role})
            </span>
            <button 
              onClick={handleLogout} 
              style={{ background: 'transparent', border: 'none', color: '#333', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </div>
    </>
  );
}

export default Header;