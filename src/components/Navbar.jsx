import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "#videos", label: "Videos" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#amenities", label: "Amenities" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
    } else {
      mq.addListener(handleChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange);
      } else {
        mq.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="inner">
        <a href="#" className="brand" onClick={closeMenu}>
          <span className="brand__logo">GJ</span>
          <span className="brand__group">
            <span className="brand__text">Gondwana Jungle Resort</span>
            <span className="brand__subtext">Near Tadoba National Park</span>
          </span>
        </a>

        <div className="nav__links" aria-label="Primary navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <span className="nav__meta">Open for family stays, safari escapes, and group bookings</span>
          <a href="#contact" className="cta">
            Enquire Now
          </a>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav__bar" />
            <span className="nav__bar" />
            <span className="nav__bar" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={open ? "false" : "true"}
      >
        <div className="mobile-menu__panel" onClick={(event) => event.stopPropagation()}>
          <div className="mobile-menu__head">
            <span className="brand__group">
              <span className="brand__text">Gondwana Jungle Resort</span>
              <span className="brand__subtext">Forest stays and Tadoba safari support</span>
            </span>
            <button className="nav__toggle nav__toggle--close" type="button" onClick={closeMenu}>
              <span className="nav__bar" />
              <span className="nav__bar" />
              <span className="nav__bar" />
            </button>
          </div>

          <div className="mobile-menu__links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="cta" onClick={closeMenu}>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
