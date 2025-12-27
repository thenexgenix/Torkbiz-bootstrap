import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="banner banner--style2 bg-color-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1920 739"
        className="bg-shape-svg"
      >
        <clipPath id="shape-clippath">
          <path d="M0 0H1920V350.233C1920 483.334 1821.85 596.054 1690.02 614.364L303.352 806.957C143.029 829.224 0 704.687 0 542.825V0Z" />
        </clipPath>
      </svg>

      <div className="container">
        <div className="banner__wrapper banner__wrapper--style2">
          <div className="row flex-md-row-reverse g-5">
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1 className="banner__content-heading banner__content-heading--style2">
                  smart solution for business
                </h1>
                <p className="banner__content-moto">
                  Are you tired of your currency not going as far as it used to?
                  Try tradingo and multiply your money! With their user-friendly
                  interface and expert market analysis, you'll be earning more
                  in no time.
                </p>
                <div className="banner__content-btngroup">
                  <Link
                    href="/signin"
                    className="trk-btn trk-btn--border trk-btn--primary1 trk-btn--left"
                  >
                    Get Started
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uJSgaPIvgKk&ab_channel=FreeTemplates"
                    className="playbtn playbtn--style2"
                    data-fslightbox
                  >
                    <span className="playbtn__thumb">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="playbtn__content">Watch Video</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="banner__thumb">
                <Image
                  src="/images/banner/home2/1.png"
                  alt="banner-thumb"
                  width={480} 
                  height={700}
                  style={{ height: "auto" }} 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--6">
          <Image
            src="/images/banner/shape/2.png"
            alt="shape icon"
            width={65}
            height={65}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="banner__shape-item banner__shape-item--7">
          <Image
            src="/images/banner/shape/4.png"
            alt="shape icon"
            width={65}
            height={65}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="banner__shape-item banner__shape-item--8">
          <Image
            src="/images/banner/shape/2.png"
            alt="shape icon"
            width={65}
            height={65}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
