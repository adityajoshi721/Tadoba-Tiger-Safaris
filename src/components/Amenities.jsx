import React from "react";

const EXPERIENCE_POINTS = [
  {
    title: "Forest-view pool",
    copy: "A cooling, open-air reset after dusty safari drives and sunrise departures."
  },
  {
    title: "Lawns and gathering spaces",
    copy: "Useful for family evenings, bonfire conversations, and gentle group itineraries."
  },
  {
    title: "Conference-ready setup",
    copy: "Comfortable for workshops, offsites, and team retreats that need nature without chaos."
  },
  {
    title: "Safari support",
    copy: "Help with planning, timing, and smoothing the edges around your Tadoba visit."
  }
];

const AMENITIES = [
  {
    title: "Fresh dining",
    copy: "Indian comfort food, local flavours, and farm-fresh produce when in season."
  },
  {
    title: "Early safari packs",
    copy: "Practical meal support for very early departures without compromising the stay."
  },
  {
    title: "Family comfort",
    copy: "Child-friendly spaces and a relaxed, non-rushed atmosphere throughout the property."
  },
  {
    title: "Open-air evenings",
    copy: "The property comes alive at sunset with softer light, cooler air, and room to unwind."
  }
];

export default function Amenities() {
  return (
    <div className="experience-grid">
      <article className="feature-panel">
        <h3 className="feature-panel__title">Everything around the safari is designed to feel easy.</h3>
        <p className="feature-panel__copy">
          The property is not trying to overpower the landscape. It gives you a comfortable base, enough shared
          space to breathe, and a rhythm that suits both first-time visitors and returning wildlife travellers.
        </p>

        <div className="feature-list">
          {EXPERIENCE_POINTS.map((item) => (
            <div key={item.title} className="feature-list__item">
              <span className="feature-list__marker" aria-hidden="true" />
              <div>
                <p className="feature-list__title">{item.title}</p>
                <p className="feature-list__copy">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="panel">
        <p className="kicker">Amenities at a glance</p>
        <h3 className="card__title">Resort comforts with a grounded, outdoorsy mood.</h3>
        <p className="card__text">
          Dining, lawns, practical safari support, and spaces that work equally well for families and groups.
        </p>

        <div className="amenity-grid">
          {AMENITIES.map((item) => (
            <div key={item.title} className="amenity-card">
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="tag-row">
          <span className="badge">Veg and non-veg meals</span>
          <span className="badge">Nature-friendly setting</span>
          <span className="badge">Custom group planning</span>
        </div>
      </article>
    </div>
  );
}
