import React, { useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  function loadingTextEffects() {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }

  useEffect(() => {
    loadingTextEffects();
  }, []);

  setTimeout(loadingTextEffects(), 1000);

  // window["loadingTextEffects"]();
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="name__heading">Rashika Suresh</h1>
        {/* <h5 className="text-light">FullStack Developer</h5> */}
{/* 
        <h1>
          <a
            href=""
            className="typewrite"
            data-period="2000"
            data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
          >
            <span className="wrap"></span>
          </a>
        </h1> */}
        <CTA />

        {/* <div class="wrapper">
          <div class="static-txt">I'm a</div>
          <ul class="dynamic-txts">
            <li>
              <span>YouTuber</span>
            </li>
            <li>
              <span>Designer</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div> */}

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
