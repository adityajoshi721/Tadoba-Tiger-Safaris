import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/VID-20250730-WA0003.mp4";

const STATS = [
  { value: "Near Tadoba", label: "Easy access for early-morning safari departures" },
  { value: "Family-run", label: "Warm hosting with flexible support for custom stays" },
  { value: "All-in help", label: "Rooms, meals, local coordination, and safari guidance" }
];

const HIGHLIGHTS = [
  {
    title: "Canopy mood",
    text: "Richer textures, darker greens, and cinematic depth that feel closer to forest atmosphere."
  },
  {
    title: "Pool and open lawns",
    text: "A relaxed setting for golden-hour unwinding, family time, and post-safari conversations."
  },
  {
    title: "Fresh local dining",
    text: "Simple, generous meals with seasonal ingredients and packed options for early departures."
  },
  {
    title: "Flexible group plans",
    text: "Useful for reunions, nature clubs, student groups, and intimate corporate offsites."
  }
];

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, []);

  const toggleAudio = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      try {
        await video.play();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero__content">
            <p className="hero__kicker">Tadoba Gateway Stay</p>
            <h1 className="hero__title">Jungle mood, moving visuals, and a stay that feels far from ordinary.</h1>
            <p className="hero__lede">
              Gondwana Jungle Resort blends the thrill of Tadoba safaris with a deeper, more immersive forest feel.
              Come for the tiger country, stay for the cinematic greenery, poolside calm, and nights that feel wrapped in canopy.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#videos">
                Watch the Resort
              </a>
              <a className="btn btn--secondary" href="#packages">
                Explore Packages
              </a>
            </div>

            <div className="hero__stats">
              {STATS.map((item) => (
                <article key={item.value} className="stat-card">
                  <h2 className="stat-card__value">{item.value}</h2>
                  <p className="stat-card__label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero__media" aria-label="Video view of Gondwana Jungle Resort surrounded by greenery">
            <video
              ref={videoRef}
              className="hero__video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero__shade" aria-hidden="true" />
            <div className="hero__frame" aria-hidden="true" />
            <div className="hero__floating-card">
              <p className="hero__floating-title">Jungle video with sound</p>
              <p className="hero__floating-copy">
                Use the button below to unmute after the page loads. Browsers block autoplay with audio until the visitor interacts.
              </p>
              <button type="button" className="btn btn--audio" onClick={toggleAudio}>
                {muted ? "Play with Sound" : "Mute Video"}
              </button>
              <p className="hero__floating-meta">The video loops in the hero, and more clips with full controls are just below.</p>
            </div>
          </div>
        </div>

        <div className="highlight-strip" aria-label="Stay highlights">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="highlight-tile">
              <h2 className="highlight-tile__title">{item.title}</h2>
              <p className="highlight-tile__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
