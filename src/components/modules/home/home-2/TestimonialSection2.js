"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function TestimonialSection2({className}) {
  return (
    <section
      className={`testimonial padding-top padding-bottom ${
        className || "bg-color-3"
      }`}
    >
      <div className="container">
        <div className="section-header d-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-0">
              Meet our <span>Clients </span>
            </h2>
          </div>
          <div className="section-header__action">
            <div className="mt-15 mt-sm-0">
              <Link
                href="/testimonials"
                className="trk-btn trk-btn--border trk-btn--primary1"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        <div className="testimonial__wrapper">
          <Swiper
            className="testimonial__slider2"
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial__slider-next",
              prevEl: ".testimonial__slider-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial__item testimonial__item--style2">
                <div className="testimonial__item-inner">
                  <div className="testimonial__item-content">
                    <p className="mb-0">
                      The above testimonial is about Martha Chumo, who taught
                      herself to code in one summer. This testimonial example
                      works because it allows prospective.
                    </p>
                    <div className="testimonial__footer">
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <Image
                            src="/images/testimonial/3.png"
                            alt="author"
                            width={100}
                            height={100}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="testimonial__author-designation">
                          <h6>Song Yoo-mee</h6>
                          <span>Marketing Coordinator</span>
                        </div>
                      </div>
                      <div className="testimonial__quote">
                        <span>
                          <i className="fa-solid fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial__item testimonial__item--style2">
                <div className="testimonial__item-inner">
                  <div className="testimonial__item-content">
                    <p className="mb-0">
                      We love the approachable format and the fact that it chose
                      to feature customers that users can relate to. When you
                      click into any story see all.
                    </p>
                    <div className="testimonial__footer">
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <Image
                            src="/images/testimonial/4.png"
                            alt="author"
                            width={100}
                            height={100}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="testimonial__author-designation">
                          <h6>Bemra Ram</h6>
                          <span>President of Sales</span>
                        </div>
                      </div>
                      <div className="testimonial__quote">
                        <span>
                          <i className="fa-solid fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial__item testimonial__item--style2">
                <div className="testimonial__item-inner">
                  <div className="testimonial__item-content">
                    <p className="mb-0">
                      In the above testimonial, a customer named Jeanine shares
                      her experience with Briogeo’s products. While the post is
                      scattered with too many product.
                    </p>
                    <div className="testimonial__footer">
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <Image
                            src="/images/testimonial/5.png"
                            alt="author"
                            width={100}
                            height={100}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="testimonial__author-designation">
                          <h6>Harsi Kosanam</h6>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                      <div className="testimonial__quote">
                        <span>
                          <i className="fa-solid fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="testimonial__item testimonial__item--style2">
                <div className="testimonial__item-inner">
                  <div className="testimonial__item-content">
                    <p className="mb-0">
                      The support team is amazing. They helped me set up my
                      entire workflow in less than an hour. I highly recommend
                      their services to everyone.
                    </p>
                    <div className="testimonial__footer">
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <Image
                            src="/images/testimonial/3.png"
                            alt="author"
                            width={100}
                            height={100}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="testimonial__author-designation">
                          <h6>John Doe</h6>
                          <span>Developer</span>
                        </div>
                      </div>
                      <div className="testimonial__quote">
                        <span>
                          <i className="fa-solid fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-nav swiper-nav--style2">
            <button className="swiper-nav__btn active swiper-nav__btn-prev testimonial__slider-prev">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="swiper-nav__btn swiper-nav__btn-next testimonial__slider-next">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
