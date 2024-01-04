import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>suyabkhan8948@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Send a Mesage</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>message ....</h5>
            <a href="https://www.facebook.com/messages/t">Send a Mesage</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>8948492033</h5>
            <a href="https://web.whatsapp.com/">Send a Mesage</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
