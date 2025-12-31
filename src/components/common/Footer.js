"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpFromLine } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Teams", href: "/team" },
    { text: "Services", href: "/services" },
    { text: "Features", href: "/features" },
  ];

  const supportLinks = [
    { text: "Terms & Conditions", href: "/terms" },
    { text: "Privacy Policy", href: "/privacy" },
    { text: "FAQs", href: "/faq" },
    { text: "Support Center", href: "/support" },
  ];

  const companyLinks = [
    { text: "Careers", href: "/careers" },
    { text: "Updates", href: "/updates" },
    { text: "Job", href: "/job" },
    { text: "Announce", href: "/announce" },
  ];
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer brand-1">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top footer__top--style1">
            <div className="row gy-5 gx-4">
              {/* --- Column 1: About & App Downloads --- */}
              <div className="col-lg-6 col-md-5">
                <div className="footer__about">
                  <Link href="/" className="footer__about-logo">
                    <Image
                      src="/images/logo/Logo-white.png"
                      alt="Logo"
                      width={150}
                      height={40}
                      style={{ width: "auto", height: "auto" }}
                    />
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
                            className="stretched-link"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/images/footer/apple.png"
                              alt="apple-icon"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
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
                            className="stretched-link"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/images/footer/play.png"
                              alt="playstore-icon"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
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

              {/* --- Column 2: Quick Links --- */}
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Quick links</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      {quickLinks.map((link, index) => (
                        <li key={index} className="footer__linklist-item">
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* --- Column 3: Support --- */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Support</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      {supportLinks.map((link, index) => (
                        <li key={index} className="footer__linklist-item">
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* --- Column 4: Company --- */}
              <div className="col-lg-2 col-md-2 col-sm-4">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Company</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      {companyLinks.map((link, index) => (
                        <li key={index} className="footer__linklist-item">
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className=" mb-0">
                  © 2023 All Rights Reserved By{" "}
                  <Link
                    href="https://themeforest.net/user/thetork/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thetork
                  </Link>{" "}
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
                      href="#"
                      className="social__link social__link--style2 d-sm-none d-md-flex justify-content-center align-items-center"
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
          <Image
            src="/images/footer/1.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="footer__shape-item footer__shape-item--2">
          <Image
            src="/images/footer/2.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="footer__shape-item footer__shape-item--3">
          <Image
            src="/images/footer/3.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="footer__shape-item footer__shape-item--4">
          <Image
            src="/images/footer/4.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>

      {/* --- Scroll To Top Button with Logic --- */}
      <Link
        href="#"
        className={`scrollToTop scrollToTop--home1 ${
          isVisible ? "active" : ""
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpFromLine size={20} />
      </Link>
    </footer>
  );
}
