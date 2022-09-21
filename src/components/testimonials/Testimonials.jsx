import React from "react";
import { Client1 } from "../../assets";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Client1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elitVoluptatibus tenetur odio ipsa illo quod iusto ut inventoreexplicabo quo eum tempora dolorum nemo quos quam. Veritatis eo",
  },

  {
    avatar: Client1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elitVoluptatibus tenetur odio ipsa illo quod iusto ut inventoreexplicabo quo eum tempora dolorum nemo quos quam. Veritatis eo",
  },
  {
    avatar: Client1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elitVoluptatibus tenetur odio ipsa illo quod iusto ut inventoreexplicabo quo eum tempora dolorum nemo quos quam. Veritatis eo",
  },
  {
    avatar: Client1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elitVoluptatibus tenetur odio ipsa illo quod iusto ut inventoreexplicabo quo eum tempora dolorum nemo quos quam. Veritatis eo",
  },
  {
    avatar: Client1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elitVoluptatibus tenetur odio ipsa illo quod iusto ut inventoreexplicabo quo eum tempora dolorum nemo quos quam. Veritatis eo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      {console.log(data)}
      <Swiper
      // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          // {
          //   console.log("Avatar",avatar)
          // }

          //   {
          //     console.log("Name",  name);
          // }
          // {
          //   console.log("Review", review);
          // }
          // {
          //   console.log("Index", index);
          // }
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name} </h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
