import React from 'react';
import { BsBookmarkCheckFill } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3> Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development*/}

        <article className="service">
          <div className="service__head">
            <h3> Data Analytics</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
            <li>
              <BsBookmarkCheckFill />
              <p>Lorem ipsum sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of Data Analytics*/}
      </div>
    </section>
  );
}

export default Services
