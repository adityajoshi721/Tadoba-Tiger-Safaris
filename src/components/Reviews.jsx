import React from "react";

const REVIEWS = [
  { name: "Aarav", text: "Beautiful property and very helpful staff. Loved the pool and morning walks.", score: 4.8 },
  { name: "Meera", text: "Perfect for families. Great food and peaceful cottages.", score: 4.7 },
  { name: "Rohit", text: "They helped us plan our safari and it was amazing!", score: 4.9 }
];

export default function Reviews(){
  return (
    <section className="section" style={{background:"linear-gradient(180deg, rgba(20,47,34,0.45), rgba(20,47,34,0.2))", borderTop:"1px solid var(--border)"}}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Guest Reviews</h2>
          <p className="section__desc">Straight from the logbook — what guests loved about their stay.</p>
        </div>
        <div className="grid-3">
          {REVIEWS.map((r, i) => (
            <article key={i} className="card">
              <div className="card__body">
                <div className="kicker">Rating: {r.score.toFixed(1)}/5</div>
                <h3 className="card__title">{r.name}</h3>
                <p className="card__text">“{r.text}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
