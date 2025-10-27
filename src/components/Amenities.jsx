import React from "react";

export default function Amenities(){
  return (
    <div className="split">
      <div className="panel">
        <h3>Highlights</h3>
        <ul className="list">
          <li>Forest-view swimming pool</li>
          <li>Lush lawns & amphitheatre</li>
          <li>Conference hall for offsites</li>
          <li>Agro farm — fresh veggies daily</li>
          <li>Guided safaris & nature walks</li>
        </ul>
      </div>
      <div className="panel">
        <h3>Dining</h3>
        <p className="card__text">
          Enjoy hearty Indian meals with local specials, fresh salads, and seasonal fruits from our farm.
        </p>
        <div style={{display:"flex", gap:10, marginTop:12, flexWrap:"wrap"}}>
          <span className="badge">Veg & Non-veg</span>
          <span className="badge">Kid friendly</span>
          <span className="badge">Packed breakfast for safari</span>
        </div>
      </div>
    </div>
  );
}
