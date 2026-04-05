import React from "react";

import pkg1 from "../assets/pkg1.jpeg";
import pkg2 from "../assets/pkg2.jpeg";
import pkg3 from "../assets/pkg3.jpeg";

const PACKAGES = [
  {
    title: "2N / 3D Signature Safari",
    image: pkg1,
    copy: "A balanced first Tadoba visit with resort stay, curated meals, and enough breathing room around the drives.",
    price: "Pricing on request",
    tags: ["2 jeep safaris", "Meals included", "Ideal for couples"]
  },
  {
    title: "Day Escape Experience",
    image: pkg2,
    copy: "A compact wildlife plan for travellers short on time but still looking for a polished jungle-day experience.",
    price: "Pricing on request",
    tags: ["Morning safari", "Breakfast and lunch", "Easy add-ons"]
  },
  {
    title: "Custom Group Retreat",
    image: pkg3,
    copy: "Flexible planning for families, clubs, alumni groups, and small teams who want safari with shared downtime.",
    price: "Built to your itinerary",
    tags: ["Group-friendly", "Transport help", "Tailored schedule"]
  }
];

export default function Rooms() {
  return (
    <div className="cards-grid">
      {PACKAGES.map((item) => (
        <article key={item.title} className="card">
          <div className="card__media" style={{ backgroundImage: `url(${item.image})` }} />
          <div className="card__body">
            <p className="kicker">Safari package</p>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{item.copy}</p>

            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="price-row">
              <span className="price-row__value">{item.price}</span>
              <a className="cta" href="#contact">
                Ask Availability
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
