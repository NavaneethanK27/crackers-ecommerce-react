import { Link } from "react-router-dom";
import logo from "../assets/Logo/logo.png";

function Header() {
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
      </div>
    </>
  );
}

export default Header;