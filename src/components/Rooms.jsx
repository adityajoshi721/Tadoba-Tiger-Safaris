import React from "react";

// Import local images (replace with your actual files)
import pkg1 from "../assets/pkg1.jpeg";
import pkg2 from "../assets/pkg2.jpeg";
import pkg3 from "../assets/pkg3.jpeg";

const TOURS = [
  {
    title: "2N/3D Safari Package",
    img: pkg1,
    text: "Includes 2 jeep safaris, all meals, and a premium cottage stay.",
    price: "On Request"
  },
  {
    title: "Day Safari Experience",
    img: pkg2,
    text: "Morning jeep safari with breakfast & lunch at the resort.",
    price: "On Request"
  },
  {
    title: "Custom Group Package",
    img: pkg3,
    text: "Tailored safaris and activities for families or corporate groups.",
    price: "On Request"
  }
];

export default function Rooms() {
  return (
    <div className="grid-3">
      {TOURS.map((t, i) => (
        <article className="card" key={i}>
          <div
            className="card__media"
            style={{
              background: `url(${t.img}) center/cover no-repeat`
            }}
          />
          <div className="card__body">
            <div className="kicker">Safari</div>
            <h3 className="card__title">{t.title}</h3>
            <p className="card__text">{t.text}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12
              }}
            >
              <span style={{ color: "var(--accent)" }}>{t.price}</span>
              <a className="cta" href="#contact">
                Enquire
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
