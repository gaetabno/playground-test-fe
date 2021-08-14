import React from "react";
import footer_logo from "/@/assets/img/footer-logo.png";

function Footer() {
  return (
    <footer className="padding-section section-dark">
      <div className="container">
        <div className="footer-content">
          <img width={250} src={footer_logo} alt="Logo Playground" />
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
          <ul className="nav-list socials">
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
