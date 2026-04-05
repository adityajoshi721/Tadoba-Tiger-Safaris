import React from "react";
import video1 from "../assets/VID-20250730-WA0001.mp4";
import video2 from "../assets/VID-20250730-WA0003.mp4";
import video3 from "../assets/VID-20250816-WA0005.mp4";
import video4 from "../assets/VID-20250816-WA0009.mp4";

const VIDEOS = [
  {
    src: video1,
    title: "Forest arrival",
    copy: "The mood-setting first clip from the property."
  },
  {
    src: video2,
    title: "Resort walkthrough",
    copy: "A stronger look at the greenery, layout, and atmosphere."
  },
  {
    src: video3,
    title: "Outdoor life",
    copy: "Natural light, open spaces, and a more relaxed pace."
  },
  {
    src: video4,
    title: "Ground moments",
    copy: "Another perspective on the stay with full audio controls."
  }
];

export default function Videos() {
  return (
    <div className="video-section">
      <div className="video-showcase">
        {VIDEOS.map((video) => (
          <article key={video.title} className="video-card">
            <div className="video-card__media">
              <video className="video-card__player" controls playsInline preload="metadata">
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
            <div className="video-card__body">
              <p className="kicker">Resort reel</p>
              <h3 className="card__title">{video.title}</h3>
              <p className="card__text">{video.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="video-section__actions">
        <a
          className="btn btn--secondary"
          href="https://www.youtube.com/@vjtigerfilms6145"
          target="_blank"
          rel="noreferrer"
        >
          Visit YouTube Channel
        </a>
      </div>
    </div>
  );
}
