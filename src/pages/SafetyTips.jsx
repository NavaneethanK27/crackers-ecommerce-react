function SafetyTips() {
  return (
    <div className="safety-container">
      <h2 className="safety-title">MY NP CRACKERS</h2>

      <p className="safety-desc">
        There are certain Do's & Don’ts to follow while purchasing, bursting and
        storing crackers. A little negligence, ignorance and carelessness can
        cause a fatal injury.
      </p>

      {/* ✅ Add dos-section */}
      <div className="tips-section dos-section">
        <h3 className="dos">✅ Do's</h3>
        <ul className="tips-list">
          <li><b>Instructions:</b> Follow instructions mentioned on the pack.</li>
          <li><b>Outdoor:</b> Use fireworks only outdoors.</li>
          <li><b>Branded Fireworks:</b> Buy from authorized manufacturers only.</li>
          <li><b>Distance:</b> Maintain safe distance while lighting.</li>
          <li><b>Water:</b> Keep water ready for emergencies.</li>
        </ul>
      </div>

      {/* ✅ Add donts-section */}
      <div className="tips-section donts-section">
        <h3 className="donts">❌ Don'ts</h3>
        <ul className="tips-list">
          <li>Do not make your own fireworks.</li>
          <li>Do not relight failed fireworks.</li>
          <li>Do not carry fireworks in pockets.</li>
          <li>Do not touch leftover fireworks.</li>
          <li>Do not wear loose clothes.</li>
        </ul>
      </div>
    </div>
  );
}

export default SafetyTips;