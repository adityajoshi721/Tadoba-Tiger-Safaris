import React from "react";

const REVIEWS = [
  {
    name: "Aarav S.",
    score: 4.8,
    meta: "Family stay",
    text: "Beautiful property, very supportive staff, and the whole schedule around the safari felt smooth from start to finish."
  },
  {
    name: "Meera P.",
    score: 4.7,
    meta: "Weekend escape",
    text: "The resort feels peaceful without being dull. The food was excellent and the pool area became our evening ritual."
  },
  {
    name: "Rohit K.",
    score: 4.9,
    meta: "Safari-first trip",
    text: "They helped us plan everything properly. That made the trip feel easy, which is exactly what you want in a wildlife getaway."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section section--accent">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="section__eyebrow">Guest Notes</p>
            <h2 className="section__title">What people remember most is the feeling after the safari, not just the checklist.</h2>
            <p className="section__desc">
              The most repeated feedback is simple: the stay makes the adventure easier and the downtime better.
            </p>
          </div>
          <span className="section__rule" aria-hidden="true" />
        </div>

        <div className="review-grid">
          {REVIEWS.map((review) => (
            <article key={review.name} className="review-card">
              <div className="review-card__score">{review.score.toFixed(1)} / 5 guest rating</div>
              <p className="review-card__quote">"{review.text}"</p>
              <h3 className="review-card__name">{review.name}</h3>
              <p className="review-card__meta">{review.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
