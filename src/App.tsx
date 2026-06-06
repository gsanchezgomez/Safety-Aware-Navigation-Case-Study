import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🗺️ Safety-Aware Navigation</h1>
        <p>For Apple Maps</p>
      </header>

      <main className="app-content">
        <section className="hero">
          <h2>Welcome to Safety-Aware Navigation</h2>
          <p>Enhancing user safety while navigating with Apple Maps</p>
        </section>

        <section className="features">
          <h3>Key Features</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Safety First</h4>
              <p>Navigate with enhanced safety awareness</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h4>Accurate Routing</h4>
              <p>Get precise directions every time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h4>Real-time Alerts</h4>
              <p>Stay informed about your route</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Fast & Reliable</h4>
              <p>Lightning-fast performance</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h3>Ready to Navigate Safely?</h3>
          <button className="cta-button">Get Started</button>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Safety-Aware Navigation. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
