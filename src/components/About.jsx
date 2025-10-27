import React from "react";

export default function About(){
  return (
    <div className="split">
      <div className="panel">
        <h3>Our Story</h3>
        <p className="card__text">
          We began Gondwana with a simple idea — create a peaceful base for safaris and slow mornings.
          Built by a family that loves the forest, the resort blends comfort with care for nature.
        </p>
      </div>
      <div className="panel">
        <h3>Location</h3>
        <p className="card__text">
          Near Tadoba National Park. We can arrange gates, timings, and transfers. Ask us for a custom itinerary.
        </p>
        <a className="cta" href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Google Maps</a>
      </div>
    </div>
  );
}
