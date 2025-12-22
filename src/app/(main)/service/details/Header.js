"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
    AOS.refresh();
  }, []);

  return (
    <section className="page-header bg-color-1">
      <div className="container">
        <div
          className="page-header__content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Module for smart trading</h2>
          <nav
            style={{ "--bs-breadcrumb-divider": "'/'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/service">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Strategy consulting
              </li>
            </ol>
          </nav>
        </div>
        <div className="page-header__shape">
          <span className="page-header__shape-item page-header__shape-item--1">
            <img src="/images/icon/page-header/1.png" alt="shape-icon" />
          </span>
          <span className="page-header__shape-item page-header__shape-item--2">
            <img src="/images/icon/page-header/2.png" alt="shape-icon" />
          </span>
          <span className="page-header__shape-item page-header__shape-item--3">
            <img src="/images/icon/page-header/3.png" alt="shape-icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
