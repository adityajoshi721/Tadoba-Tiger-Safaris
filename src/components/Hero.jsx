import React from "react";
import heroImage from '../assets/heroImage.jpeg'
export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero__card">
          <div className="kicker">Tadoba • Jungle Resort</div>
          <h1 className="h1">Wake up to birdsong, sleep to starlight.</h1>
          <p className="lede">
  Prime location near Tadoba National Park. We provide not just stays, but
  guided tours and complete package solutions for an unforgettable safari experience.
</p>
          <div className="badges">
            <span className="badge">Machan Stay</span>
            <span className="badge">Safari Assistance</span>
            <span className="badge">Family Friendly</span>
            <span className="badge">Group Packages</span>
          </div>
          <div style={{marginTop:16, display:"flex", gap:12}}>
            <a className="cta" href="#rooms">View Rooms</a>
            <a className="cta" href="#contact" style={{background:"linear-gradient(135deg, var(--accent-2), #2b8a3e)"}}>Enquire</a>
          </div>
        </div>
        
        <div className="hero__image" role="img" aria-label="Jungle canopy and morning light"></div>
      </div>
    </section>
  );
}
