import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("Thanks. Your enquiry has been sent and the team should get back to you shortly.");
    } catch (error) {
      console.error(error);
      setStatus("The form could not send right now. Please use WhatsApp and we will help from there.");
    }
  };

  return (
    <div className="contact-layout">
      <form className="contact-layout__form" onSubmit={onSubmit}>
        <p className="kicker">Send an enquiry</p>
        <h3 className="card__title">Share your travel window and we’ll help shape the stay.</h3>
        <p className="card__text">
          Include preferred dates, guest count, safari interest, and whether you need transfers or a custom group arrangement.
        </p>

        <div className="form-grid">
          <label className="field">
            <span className="field__label">Full name</span>
            <input className="input" required name="name" placeholder="Your name" />
          </label>
          <label className="field">
            <span className="field__label">Phone or WhatsApp</span>
            <input className="input" required name="phone" placeholder="+91" />
          </label>
        </div>

        <label className="field" style={{ marginTop: 12 }}>
          <span className="field__label">Email</span>
          <input className="input" required name="email" type="email" placeholder="your@email.com" />
        </label>

        <label className="field" style={{ marginTop: 12 }}>
          <span className="field__label">Trip details</span>
          <textarea
            className="input"
            required
            name="message"
            placeholder="Dates, number of guests, safari plans, room preference, and anything else we should know"
          />
        </label>

        <div className="contact-layout__actions">
          <button className="btn btn--primary" type="submit">
            Send Enquiry
          </button>
          <a className="btn btn--secondary" href="https://wa.me/919921150541" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>

        {status ? <p className="status-copy">{status}</p> : null}
      </form>

      <aside className="contact-layout__aside">
        <div className="contact-card">
          <div className="contact-card__item">
            <h4>Call</h4>
            <a href="tel:+919921150541">+91 99211 50541</a>
          </div>

          <div className="contact-card__item">
            <h4>Email</h4>
            <a href="mailto:gondwana357@gmail.com">gondwana357@gmail.com</a>
          </div>

          <div className="contact-card__item">
            <h4>Best for</h4>
            <p>Safari planning, room availability, family stays, and custom group packages.</p>
          </div>

          <div className="contact-card__note">
            <h4>Helpful tip</h4>
            <p>
              If you already know your travel dates, share them in the first message. That makes availability
              checks and package suggestions much faster.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
