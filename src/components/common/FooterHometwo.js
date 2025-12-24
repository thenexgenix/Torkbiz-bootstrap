"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const FooterHomeTwo = () => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollToTop = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer brand-1">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top footer__top--style2">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-5">
                <div className="footer__about">
                  <Link href="/" className="footer__about-logo">
                    <img src="/images/logo/Logo-white.png" alt="Logo" />
                  </Link>
                  <p className="footer__about-moto">
                    Welcome to our trading site! We offer the best, most
                    affordable products and services around. Shop now and start
                    finding great deals!
                  </p>
                  <div className="footer__app">
                    <div className="footer__app-item footer__app-item--apple">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <Link
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="stretched-link"
                          >
                            <img
                              src="/images/footer/apple.png"
                              alt="apple-icon"
                            />
                          </Link>
                        </div>
                        <div className="footer__app-content">
                          <span>Download on the</span>
                          <p className="mb-0">App Store</p>
                        </div>
                      </div>
                    </div>
                    <div className="footer__app-item footer__app-item--playstore">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <Link
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="stretched-link"
                          >
                            <img
                              src="/images/footer/play.png"
                              alt="playstore-icon"
                            />
                          </Link>
                        </div>
                        <div className="footer__app-content">
                          <span>get it on</span>
                          <p className="mb-0">Google Play</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Quick links</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/team">Teams</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/features">Features</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Support</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        <Link href="/terms">Terms & Conditions</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/privacy">Privacy Policy</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/faqs">FAQs</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/support">Support Center</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Company</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/updates">Updates</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/job">Job</Link>
                      </li>
                      <li className="footer__linklist-item">
                        <Link href="/announce">Announce</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className="mb-0">
                  © 2023 All Rights Reserved By{" "}
                  <a
                    href="https://themeforest.net/user/thetork/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thetork
                  </a>
                </p>
              </div>
              <div>
                <ul className="social">
                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li className="social__item">
                    <Link
                      href="/signin"
                      className="social__link social__link--style2 d-sm-none d-md-block"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__shape">
        <span className="footer__shape-item footer__shape-item--1">
          <img src="/images/footer/1.png" alt="shape icon" />
        </span>
        <span className="footer__shape-item footer__shape-item--2">
          <img src="/images/footer/2.png" alt="shape icon" />
        </span>
        <span className="footer__shape-item footer__shape-item--3">
          <img src="/images/footer/3.png" alt="shape icon" />
        </span>
        <span className="footer__shape-item footer__shape-item--4">
          <img src="/images/footer/4.png" alt="shape icon" />
        </span>
      </div>

      {/* ============ Scroll To Top Button ============ */}
      <Link
        href="#"
        onClick={scrollToTop}
        className={`scrollToTop scrollToTop--home1 ${
          showScroll ? "active" : ""
        }`}
      >
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </Link>
    </footer>
  );
};

export default FooterHomeTwo;
