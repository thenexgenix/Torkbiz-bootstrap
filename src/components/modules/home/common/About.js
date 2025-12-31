"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(percentage * end));

            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

//Main About Component
export default function About({ className }) {
  return (
    <section className={`about about--style1 ${className || "bg-color-2"}`}>
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <Image
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                      width={600}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />

                    {/* Top Left Floating Item */}
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>
                          <span
                            className="purecounter"
                            style={{ marginRight: "10px" }}
                          >
                            <Counter end={10} duration={1500} />
                          </span>
                          Years
                        </h3>
                        <p>Consulting Experience</p>
                      </div>
                    </div>

                    {/* Bottom Right Floating Item */}
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          <span className="purecounter">
                            <Counter end={25} duration={1500} />
                          </span>
                          K+
                        </h3>
                        <p>Satisfied Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <div className="section-header section-header--max18 mb-1">
                    <h2>
                      Learn More About <span>our company </span>
                    </h2>
                  </div>
                  <p className="mb-0">
                    Hey there! So glad you stopped by to Meet Our Company. Don't
                    miss out on this opportunity to learn about what we do and
                    the amazing team that makes it all happen!{" "}
                  </p>
                  <p className="mb-0">
                    Our company is all about creating innovative solutions and
                    providing top-notch services to our clients. From start to
                    finish, we're dedicated to delivering results that exceed
                    expectations.{" "}
                  </p>
                  <Link
                    href="/about"
                    className="trk-btn trk-btn--border trk-btn--primary1 mt-25"
                  >
                    Explore More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__shape about__shape--style1">
        <span className="about__shape-item">
          <Image
            src="/images/about/2.png"
            alt="shape-icon"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
}
