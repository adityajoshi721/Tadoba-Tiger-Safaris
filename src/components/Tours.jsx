import React from "react";

const TOURS = [
  {
    title: "2N/3D Safari Package",
    img: require("../assets/package1.jpg"), // replace with your image
    text: "Includes 2 jungle safaris, all meals, and luxury cottage stay.",
    price: "₹18,500 / person"
  },
  {
    title: "Day Safari Experience",
    img: require("../assets/package2.jpg"),
    text: "Morning jeep safari with breakfast & lunch at the resort.",
    price: "₹7,500 / person"
  },
  {
    title: "Custom Group Package",
    img: require("../assets/package3.jpg"),
    text: "Tailored safaris and activities for corporate or family groups.",
    price: "On Request"
  }
];

export default function Tours() {
  return (
    <section id="tours" className="section container">
      <div className="section__head">
        <h2 className="section__title">Tours & Safari Packages</h2>
        <p className="section__desc">
          We handle everything—from jeep permits to meals—so you can focus on spotting the tiger.
        </p>
      </div>
      <div className="grid-3">
        {TOURS.map((t, i) => (
          <article className="card" key={i}>
            <div
              className="card__media"
              style={{ background: `url(${t.img}) center/cover no-repeat` }}
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
    </section>
  );
}
