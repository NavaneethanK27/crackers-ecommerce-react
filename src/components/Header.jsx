function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        Once order Submitted WhatsApp Us for further updates.
        <span> 8668125458 | 9751660227</span>
      </div>

      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="left">
          📧 npcrackers@gmail.com
        </div>
        <div className="right">
          📱 +91 8668125458
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="address">
          <h2>Address</h2>
          <p>
            Anuppankulam, Near MSS transport <br />
            Sivakasi, Tamil Nadu 626 189
          </p>
        </div>

        <div className="logo">
          🧨 NP CRACKERS
        </div>

        <div className="info">
          <h3>100% Satisfaction</h3>
          <p>Best quality and timely delivery</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="menu">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">QUICK PURCHASE</a>
        <a href="#">SAFETY TIPS</a>
        <a href="#">CONTACT US</a>
      </div>
    </>
  );
}

export default Header;