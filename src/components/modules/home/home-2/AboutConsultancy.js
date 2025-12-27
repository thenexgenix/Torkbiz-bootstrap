"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const AboutConsultancy = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.documentElement.getAttribute("data-bs-theme") || "light";
    setTheme(currentTheme);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-bs-theme");
          setTheme(newTheme || "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);
  const getIcon = (imgNumber) => {
    if (!mounted) return `/images/about/icon/${imgNumber}.png`;

    if (theme === "dark") {
      return `/images/about/icon/${imgNumber}-dark.png`;
    }

    return `/images/about/icon/${imgNumber}.png`;
  };

  return (
    <section className="about padding-top padding-bottom bg-color-3">
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-header mb-50">
                <h2>
                  Most successful business <span>consultancy</span> to grow
                </h2>
              </div>

              {/* ITEM 1 */}
              <div
                className="about__content"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner">
                      <Image
                        src={getIcon(1)}
                        alt="about-icon"
                        width={65}
                        height={65}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5 className="mb-10">Increased efficiency</h5>
                    <p className="mb-0">
                      If we want to get more done, we gotta work smarter, not
                      harder. That's the key to increased efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div
                className="about__content"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner">
                      <Image
                        src={getIcon(2)}
                        alt="about-icon"
                        width={65}
                        height={65}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5 className="mb-10">Strategic planning</h5>
                    <p className="mb-0">
                      Let's get our thoughts together and figure out what the
                      heck we're doing. Strategic planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div
                className="about__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner">
                    
                      <Image
                        src={getIcon(3)}
                        alt="about-icon"
                        width={65}
                        height={65}
                        style={{ width: "auto", height: "auto" }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5 className="mb-10">financial management</h5>
                    <p className="mb-0">
                      To ease financial burdens, create a budget and save for
                      emergencies. Be prepared for the unexpected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="col-lg-6">
              <div
                className="about__thumb"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner mt-30 mt-lg-0">
                  <div className="about__thumb-image floating-content">
                    <Image
                      src="/images/about/3.png"
                      alt="about-image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="floating-content__top-right">
                      <div className="floating-content__item">
                        <h3>
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="12"
                          >
                            12
                          </span>
                          Years+
                        </h3>
                        <p>Working Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="about__shape about__shape--style2">
        <span className="about__shape-item about__shape-item--1">
          <Image
            src="/images/about/shape/1.png"
            alt="shpae-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="about__shape-item about__shape-item--2">
          <Image
            src="/images/about/shape/2.png"
            alt="shpae-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="about__shape-item about__shape-item--3">
          <Image
            src="/images/about/shape/3.png"
            alt="shpae-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="about__shape-item about__shape-item--4">
          <Image
            src="/images/about/shape/4.png"
            alt="shpae-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
};

export default AboutConsultancy;
