import React from "react";
import { Client1 } from "../../assets"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={ Client1} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
