import waicon from '../assets/Icons/WhatsApp.png'
function ContactUs() {
  const handlewhatsapponclick = ()=>{
        const message = "Hello, I want to buy crackers";
        window.open(`https://wa.me/8668125458?text=${encodeURIComponent(message)}`,
      "_blank");
  }
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
       
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>
            Anuppankulam, Near MSS transport <br />
            Sivakasi, Tamil Nadu 626 189
          </p>

          <h3>📧 Email</h3>
          <p>npcrackers@gmail.com</p>

          <h3>📱 Phone</h3>
          <p>+91 8668125458 / 9751660227</p>

          <h3>💬 WhatsApp</h3>
          <button className='whatsappbutton' onClick={handlewhatsapponclick}>
            <img className='whatsapp-icon' src={waicon} alt="" />
          </button>
          <p>Chat with us for quick support</p>
        </div>

        {/* Right - Contact Form */}
        <div className="contact-form">
          <h3>Send Message</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;