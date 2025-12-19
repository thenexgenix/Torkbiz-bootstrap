"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="banner banner--style1 bg--cover bg-color-3"
      style={{ backgroundImage: "url(/images/bg/4.png)" }}
    >
      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            <div className="col-lg-6 col-md-6">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1 className="banner__content-heading">
                  we help to grow your business
                </h1>
                <p className="banner__content-moto">
                  Anyone can invest money to different currency to increase
                  their earnings by the help of tradingo through online.
                </p>
                <div className="banner__content-btngroup">
                  <Link
                    href="/signin"
                    className="trk-btn trk-btn--border trk-btn--primary1 trk-btn--arrow"
                  >
                    Get Started{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uJSgaPIvgKk"
                    className="playbtn"
                    data-fslightbox
                    target="_blank"
                  >
                    <span className="playbtn__thumb">
                      <Play fill="currentColor" size={20} />
                    </span>
                    <span className="playbtn__content">Watch Video</span>
                  </Link>
                </div>
                <div className="banner__content-social">
                  <p>Follow Us</p>
                  <ul className="social">
                    <li className="social__item">
                      <Link
                        href="#"
                        className="social__link social__link--style1 active d-flex justify-content-center align-items-center"
                      >
                        <Facebook size={20} />
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link
                        href="#"
                        className="social__link social__link--style1 d-flex justify-content-center align-items-center"
                      >
                        <Linkedin size={20} />
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link
                        href="#"
                        className="social__link social__link--style1 d-flex justify-content-center align-items-center"
                      >
                        <Instagram size={20} />
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link
                        href="#"
                        className="social__link social__link--style1 d-flex justify-content-center align-items-center"
                      >
                        <Youtube size={20} />
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link
                        href="/signin"
                        className="social__link social__link--style1 d-flex justify-content-center align-items-center"
                      >
                        <Twitter size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="banner__thumb">
                <Image
                  src="/images/bg/5.png"
                  alt="banner-thumb"
                  width={1200}
                  height={1200}
                  style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`banner__shape-item banner__shape-item--${i}`}
          >
            <Image
              src={`/images/banner/shape/${i}.png`}
              alt="shape icon"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
