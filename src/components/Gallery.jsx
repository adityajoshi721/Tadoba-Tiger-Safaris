import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ✅ Import local images (replace with your actual files)
import img1 from "../assets/heroImage.jpeg";
import img2 from "../assets/guest1.jpg";
import img3 from "../assets/Room2.jpg";
import img4 from "../assets/building2.jpg";
import img5 from "../assets/topView.jpg";
import img6 from "../assets/pool1.jpg";

// Build the array with imported images
const IMGS = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid-3">
        {IMGS.map((src, i) => (
          <div
            key={i}
            className="card"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{ cursor: "zoom-in" }}
          >
            <div
              className="card__media"
              style={{ background: `url(${src}) center/cover no-repeat` }}
            />
            <div className="card__body">
              <div className="kicker">Gallery</div>
              <div className="card__title">Moment #{i + 1}</div>
              <div className="card__text">Tap to open</div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={IMGS.map((src) => ({ src }))}
      />
    </>
  );
}
