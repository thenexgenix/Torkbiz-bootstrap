"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function BrandName() {
  return (
    <div className="partner partner--gradient">
      <div className="container">
        <div className="partner__wrapper">
          <Swiper
            className="partner__slider"
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/1.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/2.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/3.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/4.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/5.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/1.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/2.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/3.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/4.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner__item">
                <div className="partner__item-inner">
                  <Image
                    src="/images/partner/light/5.png"
                    alt="partner logo"
                    width={150}
                    height={50}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
