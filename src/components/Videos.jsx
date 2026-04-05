import React from "react";
import video1 from "../assets/VID-20250730-WA0001.mp4";
import video2 from "../assets/VID-20250730-WA0003.mp4";
import video3 from "../assets/VID-20250816-WA0005.mp4";
import video4 from "../assets/VID-20250816-WA0009.mp4";

const FEATURED_VIDEO = {
  src: video1,
  title: "Resort in motion",
  copy: "A clearer first watch that anchors the section and gives the homepage a stronger focal point."
};

const SECONDARY_VIDEOS = [
  {
    src: video2,
    title: "Walkthrough",
    copy: "A closer look at the resort atmosphere and layout."
  },
  {
    src: video3,
    title: "Outdoor life",
    copy: "Natural light, open grounds, and calmer resort moments."
  },
  {
    src: video4,
    title: "Property perspective",
    copy: "Another angle with full controls and sound support."
  }
];

export default function Videos() {
  return (
    <div className="video-section">
      <div className="video-feature">
        <article className="video-feature__card">
          <div className="video-feature__media">
            <video className="video-feature__player" controls playsInline preload="metadata">
              <source src={FEATURED_VIDEO.src} type="video/mp4" />
            </video>
          </div>
          <div className="video-feature__content">
            <p className="kicker">Featured video</p>
            <h3 className="video-feature__title">{FEATURED_VIDEO.title}</h3>
            <p className="video-feature__copy">{FEATURED_VIDEO.copy}</p>
            <a
              className="btn btn--primary"
              href="https://www.youtube.com/@vjtigerfilms6145"
              target="_blank"
              rel="noreferrer"
            >
              Visit YouTube Channel
            </a>
          </div>
        </article>
      </div>

      <div className="video-rail">
        {SECONDARY_VIDEOS.map((video) => (
          <article key={video.title} className="video-rail__card">
            <div className="video-rail__media">
              <video className="video-rail__player" controls playsInline preload="metadata">
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
            <div className="video-rail__body">
              <p className="kicker">Reel clip</p>
              <h3 className="video-rail__title">{video.title}</h3>
              <p className="video-rail__copy">{video.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
