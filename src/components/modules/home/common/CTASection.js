"use client";

import Image from "next/image";

export default function CTASection({className}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className={`cta cta--style1 padding-top padding-bottom of-hidden ${
        className || "bg-color-2"
      }`}
    >
      <div className="container">
        <div className="cta__wrapper">
          <div className="row gx-4">
            <div className="col-md-5">
              <div className="cta__thumb">
                <Image
                  src="/images/cta/1.png"
                  alt="cta-thumb"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="cta__content">
                <div
                  className="cta__content-inner"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h2>
                    Subscribe <span>our newsletter</span>
                  </h2>
                  <p>
                    Hey! Are you tired of missing out on our updates? Subscribe
                    to our news now and stay in the loop!
                  </p>
                  <form
                    className="cta-form form-subscribe"
                    onSubmit={handleSubmit}
                  >
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control form-control--style1"
                        placeholder="Email Address"
                        required
                      />
                      <button
                        className="trk-btn cta-btn trk-btn--primary2"
                        type="submit"
                      >
                        Submit
                      </button>
                      <span className="input-group-btn"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta__shape">
        <span className="cta__shape-item cta__shape-item--1">
          <Image
            src="/images/cta/2.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="cta__shape-item cta__shape-item--2">
          <Image
            src="/images/cta/3.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="cta__shape-item cta__shape-item--3">
          <Image
            src="/images/cta/4.png"
            alt="shape icon"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
}
