import React from "react";

const STATS = [
  { value: "Near Tadoba", label: "Easy access for early-morning safari departures" },
  { value: "Family-run", label: "Warm hosting with flexible support for custom stays" },
  { value: "All-in help", label: "Rooms, meals, local coordination, and safari guidance" }
];

const HIGHLIGHTS = [
  {
    title: "Machan-style calm",
    text: "Rustic character outside, restful comfort inside, with space to slow down between jungle drives."
  },
  {
    title: "Pool and open lawns",
    text: "A relaxed setting for golden-hour unwinding, family time, and post-safari conversations."
  },
  {
    title: "Fresh local dining",
    text: "Simple, generous meals with seasonal ingredients and packed options for early departures."
  },
  {
    title: "Flexible group plans",
    text: "Useful for reunions, nature clubs, student groups, and intimate corporate offsites."
  }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero__content">
            <p className="hero__kicker">Tadoba Gateway Stay</p>
            <h1 className="hero__title">Wild mornings. Warm hospitality. A stay that feels cinematic.</h1>
            <p className="hero__lede">
              Gondwana Jungle Resort blends the thrill of Tadoba safaris with calm, earthy comfort. Come for
              the tiger country, stay for the slower rhythm of poolside afternoons, fresh meals, and starlit nights.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#packages">
                Explore Packages
              </a>
              <a className="btn btn--secondary" href="#gallery">
                Browse the Resort
              </a>
            </div>

            <div className="hero__stats">
              {STATS.map((item) => (
                <article key={item.value} className="stat-card">
                  <h2 className="stat-card__value">{item.value}</h2>
                  <p className="stat-card__label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero__media" aria-label="View of Gondwana Jungle Resort surrounded by greenery">
            <div className="hero__image" role="img" aria-hidden="true" />
            <div className="hero__frame" aria-hidden="true" />
            <div className="hero__floating-card">
              <p className="hero__floating-title">Designed for Tadoba days</p>
              <p className="hero__floating-copy">
                Early safari starts, quiet mid-days, and evenings that feel tucked away from everything noisy.
              </p>
              <p className="hero__floating-meta">Best for couples, families, wildlife enthusiasts, and small groups.</p>
            </div>
          </div>
        </div>

        <div className="highlight-strip" aria-label="Stay highlights">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="highlight-tile">
              <h2 className="highlight-tile__title">{item.title}</h2>
              <p className="highlight-tile__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
