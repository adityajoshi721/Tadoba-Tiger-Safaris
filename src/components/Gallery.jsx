import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import heroImage from "../assets/heroImage.jpeg";
import guestImage from "../assets/guest1.jpg";
import roomImage from "../assets/Room2.jpg";
import buildingImage from "../assets/building2.jpg";
import topViewImage from "../assets/topView.jpg";
import poolImage from "../assets/pool1.jpg";

const IMAGES = [
  {
    src: heroImage,
    title: "Forest-framed arrival",
    copy: "The first impression is all texture, light, and a strong sense of being somewhere far slower.",
    className: "gallery-card gallery-card--wide"
  },
  {
    src: topViewImage,
    title: "Aerial calm",
    copy: "Open grounds, layered greenery, and the kind of layout that makes group stays feel easy.",
    className: "gallery-card gallery-card--stack"
  },
  {
    src: poolImage,
    title: "Poolside reset",
    copy: "A quiet pause between safari drives and evening meals.",
    className: "gallery-card gallery-card--standard"
  },
  {
    src: guestImage,
    title: "Shared moments",
    copy: "Relaxed hospitality for families, couples, and wildlife-loving friend groups.",
    className: "gallery-card gallery-card--standard"
  },
  {
    src: roomImage,
    title: "Restful interiors",
    copy: "Comfort-first spaces that keep the stay warm and unfussy.",
    className: "gallery-card gallery-card--standard"
  },
  {
    src: buildingImage,
    title: "Earthy architecture",
    copy: "Built to feel rooted in the landscape instead of separated from it.",
    className: "gallery-card gallery-card--standard"
  }
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="gallery-grid">
        {IMAGES.map((image, imageIndex) => (
          <article
            key={image.title}
            className={image.className}
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <div className="gallery-card__image" style={{ backgroundImage: `url(${image.src})` }} />
            <div className="gallery-card__overlay">
              <p className="gallery-card__eyebrow">Tap to expand</p>
              <h3 className="gallery-card__title">{image.title}</h3>
              <p className="gallery-card__copy">{image.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={IMAGES.map((image) => ({ src: image.src }))}
      />
    </>
  );
}
