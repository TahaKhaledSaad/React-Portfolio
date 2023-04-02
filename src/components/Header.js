import React, { useState } from "react";
import "../css/style.css";

const Header = () => {
  // [1] this idea to replace the icon from [menu] to [close]
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // [2] this idea to remove navbar when the user scroll the page
  let nav = document.querySelector(".navbar");
  // let icon = document.querySelector(".header i");

  window.onscroll = () => {
    if (isOpen === "false") {
      document.body.nav.style.overflow = "none";
    }
  };

  return (
    <header class="header">
      <h2 class="logo">Portfolio</h2>

      <i
        className={isOpen ? "bx bx-menu" : "bx bx-x"}
        id="menu-icon"
        onClick={handleClick}
      ></i>

      <nav className={isOpen ? "navbar" : "navbar active"}>
        <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
