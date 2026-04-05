import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/VID-20250730-WA0001.mp4";

const STATS = [
  { value: "Near Tadoba", label: "Quick safari departures" },
  { value: "Family-run", label: "Warm, personal hosting" },
  { value: "Stay + support", label: "Rooms, meals, local help" }
];

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, []);

  const toggleAudio = async () => {
    const video = videoRef.current;
    if (!video) return;

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
            <h1 className="hero__title">A jungle stay with cinematic calm.</h1>
            <p className="hero__lede">
              Gondwana Jungle Resort brings together Tadoba safari access, earthy design, open greens, and a slower
              forest rhythm for families, couples, and wildlife travellers.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#videos">
                Watch Videos
              </a>
              <a className="btn btn--secondary" href="#contact">
                Plan Your Stay
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

          <div className="hero__media" aria-label="Hero video view of Gondwana Jungle Resort">
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
              <p className="hero__floating-title">First look with audio</p>
              <p className="hero__floating-copy">
                The hero starts muted for browser compatibility. Use the button to hear the clip.
              </p>
              <button type="button" className="btn btn--audio" onClick={toggleAudio}>
                {muted ? "Play with Sound" : "Mute Video"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
