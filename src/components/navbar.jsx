import React from "react";
import white_logo from "/@/assets/img/logo-playground-white.png";

function Navbar() {
  

  window.onscroll = function () {
    "use strict";
    if (
      document.body.scrollTop >= 180 ||
      document.documentElement.scrollTop >= 180
    ) {
      document.getElementById("nav").classList.add("scroll-nav");
    } else {
      document.getElementById("nav").classList.remove("scroll-nav");
    }
  };
  return (
    <nav id="nav">
      <div className="container">
        <div className="grid">
          <div className="col-1-2">
            <div className="logo-nav">
              <a href="#">
                <img
                  className="active"
                  src={white_logo}
                  alt="Logo Playground"
                />
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#we-are">we are</a>
              </li>
              <li className="nav-item">
                <a href="#we-do">we do</a>
              </li>
              <li className="nav-item">
                <a href="#careers">careers</a>
              </li>
              <li className="nav-item">
                <a href="#contact-us">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
