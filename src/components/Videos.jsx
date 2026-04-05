import React from "react";
import video1 from "../assets/VID-20250730-WA0001.mp4";
import video2 from "../assets/VID-20250730-WA0003.mp4";
import video3 from "../assets/VID-20250816-WA0005.mp4";
import video4 from "../assets/VID-20250816-WA0009.mp4";

const VIDEOS = [
  {
    src: video2,
    title: "Arrival mood",
    copy: "A richer, more cinematic first look at the property and surrounding greenery.",
    featured: true
  },
  {
    src: video1,
    title: "Poolside calm",
    copy: "A softer, slower resort moment between safari drives."
  },
  {
    src: video3,
    title: "Outdoor atmosphere",
    copy: "Open-air movement, natural light, and a stronger sense of place."
  },
  {
    src: video4,
    title: "Ground-level experience",
    copy: "Another angle on the stay, with sound controls available directly in the player."
  }
];

export default function Videos() {
  return (
    <div className="video-showcase">
      {VIDEOS.map((video) => (
        <article
          key={video.title}
          className={`video-card ${video.featured ? "video-card--featured" : ""}`}
        >
          <div className="video-card__media">
            <video className="video-card__player" controls playsInline preload="metadata">
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
          <div className="video-card__body">
            <p className="kicker">Homepage video</p>
            <h3 className="card__title">{video.title}</h3>
            <p className="card__text">{video.copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
