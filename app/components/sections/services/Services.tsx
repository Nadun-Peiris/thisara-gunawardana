import "./services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2>What I Do</h2>

      <div className="services-grid">
        <div className="glass service-card">
          <h3>🎥 Filmmaking & Video Production</h3>
          <ul>
            <li>Commercial Films</li>
            <li>Brand & Corporate Videos</li>
            <li>Music Videos</li>
            <li>Documentaries & Short Films</li>
          </ul>
        </div>

        <div className="glass service-card">
          <h3>📸 Photography</h3>
          <ul>
            <li>Commercial Photography</li>
            <li>Portrait & Lifestyle Shoots</li>
            <li>Event Photography</li>
            <li>Product Photography</li>
          </ul>
        </div>

        <div className="glass service-card">
          <h3>✂️ Post-Production</h3>
          <ul>
            <li>Video Editing (Premiere Pro)</li>
            <li>Color Grading</li>
            <li>Motion Graphics</li>
            <li>Photo Retouching</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
