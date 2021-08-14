import React, { useState } from "react";
//main css
import "./assets/css/main.css";
//FontAwesome css
import "./assets/css/fontawesome-all.min.css";
//Images
import we_are_url from "/@/assets/img/banner-we-are.jpg";
import we_do_url from "/@/assets/img/banner-we-do.jpg";
import careers_url from "/@/assets/img/banner-carrers.jpg";
//Components
import Slider from "/@/components/slider";
import CookiesBanner from "/@/components/cookies";
import Navbar from "/@/components/navbar";
import Tabs from "/@/components/tabs";
import Form from "/@/components/form";
import Footer from "/@/components/footer";

function Index() {
  const cookies_shown = localStorage.getItem("cookies_shown");

  return (
    <div id="home">
      <header>
        {<Navbar />}
        {<Slider />}
      </header>
      <section id="cards" className="padding-section section-light">
        <div className="container">
          <div className="card-wrap">
            <div className="col-1-3">
              <div className="card">
                <div className="title">
                  <h3>PLAY HARDER</h3>
                </div>
                <div className="content">
                  Aenean mollis dolor a mattis viverra. In hac habitasse platea
                  dictumst. Curabitur tempus dui tortor, et bibendum lacus
                  eleifend ut.
                </div>
                <div className="link">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-1-3">
              <div className="card">
                <div className="title">
                  <h3>SIMPLICITY</h3>
                </div>
                <div className="content">
                  Donec vitae augue tellus. Proin et urna sit amet metus
                  fermentum dapibus non quis urna.
                </div>
                <div className="link">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-1-3">
              <div className="card">
                <div className="title">
                  <h3>INNOVATION</h3>
                </div>
                <div className="content">
                  Suspendisse vehicula, lectus sed molestie aliquam, arcu neque
                  gravida lacus.
                </div>
                <div className="link">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="we-are" className="section-dark">
        <div className="grid">
          <div className="col-7-12 col-1-2-md">
            <img src={we_are_url} alt="We Are" />
          </div>
          <div className="col-5-12 col-1-2-md">
            <div className="copy">
              <h2>
                we <br />
                are.
              </h2>
              <p>
                Consectetur adipiscing elit. <br />
                Nulla condimentum tortor sem.
              </p>
              <div>
                <a href="#" className="button dark">
                  THE PLAYERS <span className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="we-do">
        <div className="grid">
          <div className="col-5-12 col-1-2-md">
            <div className="copy">
              <h2>
                we <br />
                do.
              </h2>
              <p>
                Consectetur adipiscing elit. <br />
                Nulla condimentum tortor sem.
              </p>
              <div>
                <a href="#" className="button light">
                  THE PROJECTS <span className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-7-12 col-1-2-md order-small">
            <img src={we_do_url} alt="We Do" />
          </div>
        </div>
      </section>
      <section id="careers" className="section-dark">
        <div className="grid">
          <div className="col-7-12 col-1-2-md">
            <img src={careers_url} alt="Careers" />
          </div>
          <div className="col-5-12 col-1-2-md ">
            <div className="copy">
              <h2>careers.</h2>
              <p>
                Consectetur adipiscing elit. <br />
                Nulla condimentum tortor sem.
              </p>
              <div>
                <a href="#" className="button dark">
                  THE POSITIONS <span className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<Tabs />}
      <section id="contact-us" className="section-dark padding-section">
        <div className="container">
          <div className="grid">
            <div className="col-5-12 col-1-2-md">
              <div className="copy">
                <h2>
                  contact
                  <br />
                  us.
                </h2>
                <p>
                  Playground srl <br />
                  Via G. Mazzini 3/C, <br />
                  Cernusco Sul Naviglio (Milano) <br />
                  - <br />T +39 0240706003
                </p>
              </div>
            </div>
            <div className="col-7-12 ">
              <div className="form-wrap">{<Form />}</div>
            </div>
          </div>
        </div>
      </section>
      {!cookies_shown && <CookiesBanner />}
      {<Footer />}
    </div>
  );
}

export default Index;
