import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Videos from "./components/Videos.jsx";
import Rooms from "./components/Rooms.jsx";
import Gallery from "./components/Gallery.jsx";
import Amenities from "./components/Amenities.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./jungle-theme.css";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />

        <section id="videos" className="section section--tight">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">Moving Through Gondwana</p>
                <h2 className="section__title">Real resort videos, right on the homepage, with sound controls built in.</h2>
                <p className="section__desc">
                  Every clip can be played with audio from its controls. The hero video starts muted first because
                  browsers block autoplay with sound until the visitor interacts.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <Videos />
          </div>
        </section>

        <section id="gallery" className="section section--tight">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">Visual Diary</p>
                <h2 className="section__title">A resort shaped by forest light, water, and quiet luxury.</h2>
                <p className="section__desc">
                  Sunlit decks, still pools, cosy cottages, and open skies. The gallery leans into the
                  atmosphere guests actually remember after a Tadoba stay.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <Gallery />
          </div>
        </section>

        <section id="packages" className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">Stay Plans</p>
                <h2 className="section__title">Safari packages built for families, first-timers, and group escapes.</h2>
                <p className="section__desc">
                  Each plan is arranged to keep the logistics easy, the pace relaxed, and the safari time front and center.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <Rooms />
          </div>
        </section>

        <section id="amenities" className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">Resort Life</p>
                <h2 className="section__title">The comfort layer around every safari morning and slow evening.</h2>
                <p className="section__desc">
                  Thoughtful hospitality, generous spaces, and a setting that lets the wild stay close without feeling rough.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <Amenities />
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">About Gondwana</p>
                <h2 className="section__title">A family-run forest retreat designed to feel grounded, warm, and unhurried.</h2>
                <p className="section__desc">
                  Gondwana is built for travellers who want the thrill of Tadoba with a stay that still feels personal.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <About />
          </div>
        </section>

        <Reviews />

        <section id="contact" className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="section__eyebrow">Plan Your Stay</p>
                <h2 className="section__title">Tell us your dates and group size, and we’ll shape the right Tadoba getaway.</h2>
                <p className="section__desc">
                  Reach out for room availability, safari support, transfers, or group itineraries. The form and WhatsApp both work.
                </p>
              </div>
              <span className="section__rule" aria-hidden="true" />
            </div>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
