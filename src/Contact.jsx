import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0ou379h",
        "template_zzjya8j",
        form.current,
        "O8X9yIvWLHHcB3a7o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container " id="contact">
      <div className="title-header">
        <h2 className="title">Get in Touch</h2>
        <p className="subtitle">I'd love to hear from you!</p>
      </div>

      <div className="contact-details">
        <div className="contact-card">
          <i className="uil uil-envelope"></i>
          <h5>Email</h5>
          <p>mandliyarajendra0000@gmail.com</p>
        </div>
        <div className="contact-card">
          <i className="uil uil-whatsapp"></i>
          <h5>WhatsApp</h5>
          <p>7898757473</p>
        </div>
        <div className="contact-card">
          <i className="uil uil-instagram-alt"></i>
          <h5>Instagram</h5>
          <p>@rajendramandliya11</p>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form-section">
        <h4>Send Me a Message</h4>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          className="message"
          placeholder="Write your message"
          required
        ></textarea>
        <button type="submit" className="btn-submit">
          Send Message <i className="uil uil-message"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
