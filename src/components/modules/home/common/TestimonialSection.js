"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      text: "The above testimonial is about Martha Chumo, who taught herself to code in one summer. This testimonial example works because it allows prospective customers to see themselves in Codeacademy’s current customer base.",
      name: "Mobarok Hossain",
      role: "Marketing Coordinator",
      image: "/images/testimonial/1.png",
    },
    {
      id: 2,
      text: "In the above testimonial, a customer named Jeanine shares her experience with Briogeo’s products. While the post is scattered with too many product mentions, it takes full advantage of its real estate by allowing the writer to tell",
      name: "Guy Hawkins",
      role: "President of Sales",
      image: "/images/testimonial/2.png",
    },
    {
      id: 3,
      text: "The above testimonial is about Martha Chumo, who taught herself to code in one summer. This testimonial example works because it allows prospective customers to see themselves in Codeacademy’s current customer base.",
      name: "Belal Hossain",
      role: "Marketing Manager",
      image: "/images/testimonial/6.png",
    },
    {
      id: 4,
      text: "Our experience with this team was incredible. They delivered on time, within budget, and exceeded all our expectations regarding quality and performance.",
      name: "Cody Fisher",
      role: "Project Manager",
      image: "/images/testimonial/1.png",
    },
  ];

  return (
    <>
      <section className="testimonial padding-top padding-bottom bg-color-2">
        <div className="container">
          <div className="section-header d-md-flex align-items-center justify-content-between">
            <div className="section-header__content">
              <h2 className="mb-15 mt-minus-10">
                Meet our <span>Clients </span>
              </h2>
              <p className="mb-0">
                Our clients are as diverse as they are amazing, ranging from
                startups to established businesses.
              </p>
            </div>
            <div className="section-header__action">
              <div className="swiper-nav swiper-nav--style1">
                <button className="swiper-nav__btn testimonial__slider-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="swiper-nav__btn testimonial__slider-next active">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="testimonial__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <Swiper
              className="testimonial__slider"
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".testimonial__slider-next",
                prevEl: ".testimonial__slider-prev",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} style={{ height: "auto" }}>
                  <div
                    className="testimonial__item testimonial__item--style1"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="testimonial__item-inner"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        className="testimonial__item-content"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <p className="mb-0" style={{ flex: "1" }}>
                          {item.text}
                        </p>
                        <div className="testimonial__footer">
                          <div className="testimonial__author">
                            <div className="testimonial__author-thumb">
                              <Image
                                src={item.image}
                                alt="author"
                                width={60}
                                height={60}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </div>
                            <div className="testimonial__author-designation">
                              <h6>{item.name}</h6>
                              <span>{item.role}</span>
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
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
