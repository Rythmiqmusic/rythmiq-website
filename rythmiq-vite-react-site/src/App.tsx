
import './index.css';

function App() {
  return (
    <>
      <header className="header">
        <img src="/logo.jpg" alt="Rythmiq Logo" className="logo" />
        <nav>
          <a href="#about">About</a>
          <a href="#artists">Artists</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Rythmiq Music Group Inc.</h1>
        <p>Where Sound Meets Soul</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a full-service music production and artist development company shaping the future of sound.</p>
      </section>

      <section id="artists">
        <h2>Our Artists</h2>
        <div className="grid">
          <div>
            <h3>Artist One</h3>
            <p>Genre-bending producer & performer.</p>
          </div>
          <div>
            <h3>Artist Two</h3>
            <p>Electro-soul singer-songwriter.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <h2>Services</h2>
        <div className="grid">
          <div>
            <h3>Music Production</h3>
            <p>Custom beats, recording, and mixing services.</p>
          </div>
          <div>
            <h3>Artist Development</h3>
            <p>Craft your sound, image, and brand.</p>
          </div>
          <div>
            <h3>Licensing & Sync</h3>
            <p>Get your music placed in film, TV, games, and ads.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@rythmiqmusic.com</p>
        <p>Instagram: @rythmiqmusic</p>
      </section>

      <footer>
        &copy; 2025 Rythmiq Music Group Inc. All rights reserved.
      </footer>
    </>
  );
}

export default App;
