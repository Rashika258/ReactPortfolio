import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rashi@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__options">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Rashika</h5>
            <a href="https://www.facebook.com/" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__options">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+123 456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone+=6879797989"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/*End of Contact Options  */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your message"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
