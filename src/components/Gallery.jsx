import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import buildingImage from "../assets/building2.jpg";
import guestImage from "../assets/guest1.jpg";
import dayImage from "../assets/IMG-20230606-WA0005.jpg";
import candidOne from "../assets/IMG-20250816-WA0012.jpg";
import candidTwo from "../assets/IMG-20250816-WA0014.jpg";
import candidThree from "../assets/IMG-20250816-WA0015.jpg";
import candidFour from "../assets/IMG-20250816-WA0036.jpg";
import poolImage from "../assets/pool1.jpg";
import roomOne from "../assets/Room1.jpg";
import roomTwo from "../assets/Room2.jpg";
import roomThree from "../assets/Room3.jpg";
import topViewImage from "../assets/topView.jpg";
import heroImage from "../assets/heroImage.jpeg";
import pkgOne from "../assets/pkg1.jpeg";
import pkgTwo from "../assets/pkg2.jpeg";
import pkgThree from "../assets/pkg3.jpeg";

const IMAGES = [
  { src: heroImage, title: "Arrival energy", copy: "A first impression with strong atmosphere.", tone: "hero" },
  { src: topViewImage, title: "Aerial estate", copy: "The property layout in one sweeping frame.", tone: "landscape" },
  { src: poolImage, title: "Pool hour", copy: "Quiet luxury after a long safari day.", tone: "portrait" },
  { src: roomOne, title: "Restful rooms", copy: "Warm interiors with simple comfort.", tone: "square" },
  { src: roomTwo, title: "Stay details", copy: "Clean lines and calm private space.", tone: "square" },
  { src: roomThree, title: "Suite mood", copy: "A softer hospitality moment.", tone: "portrait" },
  { src: guestImage, title: "Shared memories", copy: "Hospitality that works for groups too.", tone: "landscape" },
  { src: buildingImage, title: "Resort entrance", copy: "The architecture meets the landscape.", tone: "portrait" },
  { src: dayImage, title: "Safari pulse", copy: "The wider Tadoba spirit around the stay.", tone: "landscape" },
  { src: candidOne, title: "Open grounds", copy: "Textured outdoor spaces and movement.", tone: "portrait" },
  { src: candidTwo, title: "Natural moments", copy: "A livelier candid view around the resort.", tone: "square" },
  { src: candidThree, title: "Between drives", copy: "Slow time, open air, and softer light.", tone: "square" },
  { src: candidFour, title: "Golden hours", copy: "The property comes alive in evening light.", tone: "portrait" },
  { src: pkgOne, title: "Curated stays", copy: "Package-led experiences with stronger storytelling.", tone: "square" },
  { src: pkgTwo, title: "Safari plans", copy: "A more polished package presentation.", tone: "portrait" },
  { src: pkgThree, title: "Group escapes", copy: "Flexible itineraries for larger bookings.", tone: "landscape" }
];

const toneClass = {
  hero: "gallery-tile gallery-tile--hero",
  landscape: "gallery-tile gallery-tile--landscape",
  portrait: "gallery-tile gallery-tile--portrait",
  square: "gallery-tile gallery-tile--square"
};

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="gallery-wall">
        {IMAGES.map((image, imageIndex) => (
          <article
            key={`${image.title}-${imageIndex}`}
            className={toneClass[image.tone]}
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <div className="gallery-tile__image" style={{ backgroundImage: `url(${image.src})` }} />
            <div className="gallery-tile__glow" aria-hidden="true" />
            <div className="gallery-tile__overlay">
              <p className="gallery-tile__eyebrow">Open photo</p>
              <h3 className="gallery-tile__title">{image.title}</h3>
              <p className="gallery-tile__copy">{image.copy}</p>
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
