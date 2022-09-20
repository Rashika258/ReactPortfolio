import React, { useState } from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { MdOutlineContactPhone, MdComputer } from "react-icons/md";
import { BsBookmarkStar, BsJournalCheck } from "react-icons/bs";

import { HiOutlineUsers } from "react-icons/hi";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}>
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookmarkStar />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdComputer />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineContactPhone />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsJournalCheck />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <HiOutlineUsers />
      </a>
    </nav>
  );
};

export default Nav;
