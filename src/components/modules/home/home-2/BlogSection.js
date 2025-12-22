"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="blog padding-top padding-bottom bg-color-3 of-hidden">
      <div className="container">
        <div className="section-header d-flex align-items-center justify-content-between">
          <div className="section-header__content section-header__content--style3">
            <h2 className="mb-0">
              Hot business <span>Articles </span>
            </h2>
          </div>
          <div className="section-header__action">
            <div className="mt-15 mt-sm-0">
              <Link
                href="/blogs"
                className="trk-btn trk-btn--border trk-btn--primary1"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="blog__wrapper">
          <div className="row g-4">
            {/* Blog Item 1 */}
            <div className="col-md-6">
              <div
                className="blog__item blog__item--style2"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="blog__item-inner pt-30 px-30 pb-40">
                  <div className="blog__thumb">
                    <img src="/images/blog/4.png" alt="blog Images" />
                  </div>

                  <div className="blog__content mt-30">
                    <h5 className="10">
                      {" "}
                      <Link href="/blog-details">
                        Tips for Boosting Employee Productivity
                      </Link>{" "}
                    </h5>

                    <p className="mb-15">
                      Boosting employee productivity is a key goal for many
                      businesses, but it can be challenging to know where to
                      start. With the help of a business consultant, you can
                      identify areas.
                    </p>

                    <Link href="/blog-details" className="text-btn">
                      Read more <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Item 2 */}
            <div className="col-md-6">
              <div
                className="blog__item blog__item--style2"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="blog__item-inner pt-30 px-30 pb-40">
                  <div className="blog__thumb">
                    <img src="/images/blog/5.png" alt="blog Images" />
                  </div>

                  <div className="blog__content mt-30">
                    <h5 className="10">
                      {" "}
                      <Link href="/blog-details">
                        How to Scale Your Business with Consultant
                      </Link>{" "}
                    </h5>

                    <p className="mb-15">
                      Trading Tales reminds us that profits and losse are part
                      investment game, but it&apos;s the lessons learned that
                      truly matter. Keep calm and trade on your performance will
                      grow up in future!
                    </p>

                    <Link href="/blog-details" className="text-btn">
                      Read more <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
