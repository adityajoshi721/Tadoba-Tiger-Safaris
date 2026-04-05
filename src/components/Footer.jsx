import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__shell">
          <div className="footer__stack">
            <div className="brand">
              <span className="brand__logo">GJ</span>
              <span className="brand__group">
                <span className="brand__text" style={{ color: "var(--moss-deep)" }}>
                  Gondwana Jungle Resort
                </span>
                <span className="brand__subtext" style={{ color: "var(--text-soft)" }}>
                  Near Tadoba National Park, Maharashtra
                </span>
              </span>
            </div>
            <p className="footer__copy">
              A warm forest-base stay for safari travellers who want comfort, space, and a slower rhythm around the wild.
            </p>
            <p className="small">© {new Date().getFullYear()} Gondwana Jungle Resort. All rights reserved.</p>
          </div>

          <div className="footer__stack">
            <h3 className="footer__title">Contact</h3>
            <a className="small" href="tel:+919921150541">
              +91 99211 50541
            </a>
            <a className="small" href="mailto:gondwana357@gmail.com">
              gondwana357@gmail.com
            </a>
            <p className="small">Custom packages, family stays, and group safari support.</p>
          </div>

          <div className="footer__stack">
            <h3 className="footer__title">Explore</h3>
            <a className="small" href="#gallery">
              Gallery
            </a>
            <a className="small" href="#packages">
              Packages
            </a>
            <a className="small" href="#contact">
              Enquiry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
