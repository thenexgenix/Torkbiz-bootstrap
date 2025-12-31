"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      image: "/images/blog/1.png",
      category: "Art & Design",
      title: "the importance of trends.",
      desc: "Trends matter because they shape our new culture and help us stay relevant in ariving constantly changing world.",
      authorImg: "/images/blog/author/1.png",
      authorName: "Vasha Gueye",
      date: "20 May, 2023",
    },
    {
      id: 2,
      image: "/images/blog/2.png",
      category: "Marketing",
      title: "How to Grow Business?",
      desc: "Growing your business? Focus for customer satisfaction, marketing, networking, always be open.",
      authorImg: "/images/blog/author/2.png",
      authorName: "Abhivibha Kanmani",
      date: "30 June, 2023",
    },
    {
      id: 3,
      image: "/images/blog/3.png",
      category: "Business",
      title: "How To Increase Sales?",
      desc: "Hey there! Struggling with your business off Need someone to guide you? Contact me, I'm an experienced consultant.",
      authorImg: "/images/blog/author/3.png",
      authorName: "Hulya Aydin",
      date: "12 April, 2023",
    },
    {
      id: 4,
      image: "/images/blog/1.png",
      category: "Art & Design",
      title: "The future of Design",
      desc: "Trends matter because they shape our new culture and help us stay relevant in ariving constantly changing world.",
      authorImg: "/images/blog/author/1.png",
      authorName: "Vasha Gueye",
      date: "25 May, 2023",
    },
  ];

  return (
    <section className="blog padding-top padding-bottom bg-color-4">
      <div className="container">
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-15 mt-minus-10">
              <span>articles</span> for business
            </h2>
            <p className="mb-0">
              Hey there pro traders, check out these articles with tips to take
              your trading game to the next level!
            </p>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button className="swiper-nav__btn blog__slider-prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="swiper-nav__btn blog__slider-next active">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            className="blog__slider"
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".blog__slider-next",
              prevEl: ".blog__slider-prev",
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog__item blog__item--style2">
                  <div className="blog__item-inner">
                    <div className="blog__thumb">
                      <Image
                        src={blog.image}
                        alt="blog Images"
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>

                    <div className="blog__content">
                      <div className="blog__meta">
                        <span className="blog__meta-tag blog__meta-tag--style1">
                          {blog.category}
                        </span>
                      </div>
                      <h5 className="10">
                        <Link href="/blog-details">{blog.title}</Link>
                      </h5>

                      <p className="mb-15" style={{ marginRight: "15px" }}>
                        {blog.desc}
                      </p>

                      <div className="blog__writer">
                        <div className="blog__writer-thumb">
                          <Image
                            src={blog.authorImg}
                            alt="writer"
                            width={40}
                            height={40}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <div className="blog__writer-designation">
                          <p className="mb-0">{blog.authorName}</p>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="trk-btn trk-btn--border trk-btn--primary1 mt-15"
          >
            View more{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
