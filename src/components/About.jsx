import React from "react";

export default function About() {
  return (
    <div className="about-grid">
      <article className="panel story-card">
        <p className="kicker">Our story</p>
        <h3 className="story-card__quote">Built as a peaceful base for safari travellers who still want warmth, comfort, and personality.</h3>
        <p className="story-card__body">
          Gondwana began with a simple idea: create a resort near Tadoba that feels rooted in the landscape rather
          than isolated from it. The result is a family-run stay where logistics are handled with care and the
          overall mood stays calm, earthy, and welcoming.
        </p>
        <p className="story-card__body">
          Whether you are arriving for a first wildlife trip or bringing a larger family group, the experience is
          meant to feel personal instead of transactional.
        </p>
      </article>

      <article className="panel">
        <p className="kicker">Why guests choose it</p>
        <h3 className="card__title">A strong location, flexible support, and a stay that lets Tadoba remain the hero.</h3>

        <div className="detail-stack">
          <div className="detail-stack__item">
            <h4>Near the park</h4>
            <p>Useful for early departures, shorter transfers, and low-stress safari mornings.</p>
          </div>
          <div className="detail-stack__item">
            <h4>Custom itineraries</h4>
            <p>Ask about gates, timings, transfers, and group-specific pacing for your stay.</p>
          </div>
          <div className="detail-stack__item">
            <h4>Relaxed hosting</h4>
            <p>The experience is friendly and responsive without feeling over-programmed.</p>
          </div>
        </div>

        <div className="hero__actions">
          <a className="btn btn--secondary" href="https://maps.google.com" target="_blank" rel="noreferrer">
            Open in Maps
          </a>
          <a className="btn btn--primary" href="#contact">
            Build My Itinerary
          </a>
        </div>
      </article>
    </div>
  );
}
