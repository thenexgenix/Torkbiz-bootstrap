"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewsletterSection() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="cta cta--style2 bg-color-3">
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__newsletter justify-content-center">
            <div
              className="cta__newsletter-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="cta__thumb">
                <img src="/images/cta/5.png" alt="cta-thumb" />
              </div>
              <div className="cta__subscribe">
                <h2>
                  {" "}
                  <span>Subscribe</span> our news
                </h2>
                <p>
                  Hey! Are you tired of missing out on our updates? Subscribe to
                  our news now and stay in the loop!
                </p>
                <form
                  className="cta-form cta-form--style2 form-subscribe"
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-form d-sm-flex align-items-center">
                    <input
                      type="email"
                      className="form-control form-control--style2 mb-3 mb-sm-0"
                      placeholder="Email Address"
                    />
                    <button
                      className="trk-btn trk-btn--border trk-btn--large trk-btn--primary1"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
