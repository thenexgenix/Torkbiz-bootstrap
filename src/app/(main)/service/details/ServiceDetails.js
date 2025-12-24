"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
    });
  }, []);

  return (
    <div className="service-details padding-top padding-bottom bg-color-6">
      <div className="container">
        <div className="service-details__wrapper">
          <div className="row flex-lg-row-reverse g-5">
            <div className="col-lg-8">
              <div className="service-details__item">
                <div className="service-details__item-inner">
                  <div
                    className="service-details__thumb mb-40"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="service-details__thumb-inner">
                      <img src="/images/service/bg.png" alt="service-icon" />
                    </div>
                  </div>
                  <div
                    className="service-details__content"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <h3 className="mb-15">
                      <Link className="stretched-link" href="/service/details">
                        strategy consulting
                      </Link>
                    </h3>
                    <p className="mb-0">
                      Are you ready to take your trading skills to the next
                      level? Then, you need to check out these modules for smart
                      trading! With these modules, you'll be able to analyze
                      market trends and make intelligent trades. Whether you're
                      a beginner or a seasoned pro, these modules are designed
                      to help you succeed. You'll learn everything from
                      technical analysis to risk management, so you can make the
                      best decisions for your investments.
                    </p>
                  </div>
                  <div
                    className="service-details__faq mt-55"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="faq">
                      <div className="faq__wrapper">
                        <div
                          className="accordion accordion--style1"
                          id="faqAccordion1"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="accordion__item">
                                <div className="accordion__header" id="faq1">
                                  <button
                                    className="accordion__button accordion__button--style2"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody1"
                                    aria-expanded="false"
                                    aria-controls="faqBody1"
                                  >
                                    <span className="accordion__button-content">
                                      What does this tool do?
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody1"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="faq1"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      This is an artificial intelligence
                                      integrated tool by which you can automate
                                      your PTE and IELTS mock test systems in
                                      your educational systems.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="accordion__item">
                                <div className="accordion__header" id="faq2">
                                  <button
                                    className="accordion__button accordion__button--style2 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody2"
                                    aria-expanded="true"
                                    aria-controls="faqBody2"
                                  >
                                    <span className="accordion__button-content">
                                      What are the disadvantages of online
                                      trading?
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="faq2"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      You don’t need to worry, the interface is
                                      user-friendly. Anyone can use it smoothly.
                                      Our user manual will help you to solve
                                      your problem. If you do find yourself
                                      needing some help, feel free to reach out
                                      to our support team through our Contact
                                      page, or visit our Support Center.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="accordion__item">
                                <div className="accordion__header" id="faq3">
                                  <button
                                    className="accordion__button accordion__button--style2 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody3"
                                    aria-expanded="false"
                                    aria-controls="faqBody3"
                                  >
                                    <span className="accordion__button-content">
                                      Is online trading safe?{" "}
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="faq3"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      Definitely, you can give permission to all
                                      of your team members and can set their
                                      roles based on their position to manage it
                                      in your institution.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="accordion__item">
                                <div className="accordion__header" id="faq4">
                                  <button
                                    className="accordion__button accordion__button--style2 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody4"
                                    aria-expanded="false"
                                    aria-controls="faqBody4"
                                  >
                                    <span className="accordion__button-content">
                                      What is online trading, and how does it
                                      work?
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="faq4"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      Definitely, you can give permission to all
                                      of your team members and can set their
                                      roles based on their position to manage it
                                      in your institution.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="accordion__item border-0">
                                <div className="accordion__header" id="faq5">
                                  <button
                                    className="accordion__button accordion__button--style2 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody5"
                                    aria-expanded="false"
                                    aria-controls="faqBody5"
                                  >
                                    <span className="accordion__button-content">
                                      Which app is best for online trading?{" "}
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="faq5"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      Definitely, you can give permission to all
                                      of your team members and can set their
                                      roles based on their position to manage it
                                      in your institution.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="accordion__item border-0">
                                <div className="accordion__header" id="faq6">
                                  <button
                                    className="accordion__button accordion__button--style2 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqBody6"
                                    aria-expanded="false"
                                    aria-controls="faqBody6"
                                  >
                                    <span className="accordion__button-content">
                                      How to create a trading account?
                                    </span>
                                    <span className="accordion__button-plusicon"></span>
                                  </button>
                                </div>
                                <div
                                  id="faqBody6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="faq6"
                                  data-bs-parent="#faqAccordion1"
                                >
                                  <div className="accordion__body">
                                    <p className="mb-15">
                                      Definitely, you can give permission to all
                                      of your team members and can set their
                                      roles based on their position to manage it
                                      in your institution.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-details__team mt-50">
                    <h5 className="mb-25">Meet with our experts</h5>
                    <div
                      className="team"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="row g-5">
                        <div className="col-sm-6">
                          <div className="team__item team__item--shape team__item--bgcolor2">
                            <div className="team__item-inner team__item-inner--shape">
                              <div className="team__item-thumb">
                                <img
                                  src="/images/team/2.png"
                                  alt="Team Image"
                                />
                              </div>
                              <div className="team__item-content team__item-content--style1">
                                <div className="team__item-author team__item-author--style1">
                                  <div className="team__author-info">
                                    <h6 className="mb-1">
                                      <Link href="/team/details">
                                        Theresa Webb
                                      </Link>{" "}
                                    </h6>
                                    <p className="mb-0">Strategic Advisor</p>
                                  </div>
                                </div>
                              </div>
                              <div className="team__item-shape">
                                <span className="team__item-shape1">
                                  <img
                                    src="/images/team/icon/1.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                                <span className="team__item-shape2">
                                  <img
                                    src="/images/team/icon/2.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                                <span className="team__item-shape3">
                                  <img
                                    src="/images/team/icon/3.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="team__item team__item--shape team__item--bgcolor2">
                            <div className="team__item-inner team__item-inner--shape">
                              <div className="team__item-thumb">
                                <img
                                  src="/images/team/3.png"
                                  alt="Team Image"
                                />
                              </div>
                              <div className="team__item-content team__item-content--style1">
                                <div className="team__item-author team__item-author--style1">
                                  <div className="team__author-info">
                                    <h6 className="mb-1">
                                      <Link href="/team/details">
                                        Courtney Henry
                                      </Link>{" "}
                                    </h6>
                                    <p className="mb-0">
                                      Management Consultant
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="team__item-shape">
                                <span className="team__item-shape1">
                                  <img
                                    src="/images/team/icon/1.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                                <span className="team__item-shape2">
                                  <img
                                    src="/images/team/icon/2.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                                <span className="team__item-shape3">
                                  <img
                                    src="/images/team/icon/3.png"
                                    alt="shpae-icon"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR START */}
            <div className="col-lg-4 col-md-8 col-12">
              <div className="sidebar">
                <div className="row g-4">
                  <div className="col-12">
                    <div
                      className="sidebar__search"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <h6 className="mb-10">Search Here</h6>
                      <div className="sidebar__search-body">
                        <form action="#">
                          <div className="input">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search articles"
                            />
                            <button type="submit" className="search-btn">
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="sidebar__categorie"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="sidebar__head">
                        <h6>Categories</h6>
                      </div>
                      <div className="sidebar__categorie-body">
                        <div className="sidebar__social-content">
                          <ul>
                            <li className="active">
                              <Link href="#">Strategy consulting</Link>
                            </li>
                            <li>
                              <Link href="#">Financial advisory</Link>
                            </li>
                            <li>
                              <Link href="#">Operations management</Link>
                            </li>
                            <li>
                              <Link href="#">Supply chain optimization</Link>
                            </li>
                            <li>
                              <Link href="#">Human resource consulting</Link>
                            </li>
                            <li>
                              <Link href="#">Marketing and PR consulting</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="sidebar__social"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="sidebar__head">
                        <h6>Social Links</h6>
                      </div>
                      <div className="sidebar__social-body">
                        <div className="sidebar__social-content">
                          <ul className="social mt-25">
                            <li className="social__item">
                              <Link
                                href="#"
                                className="social__link social__link--style1"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li className="social__item">
                              <Link
                                href="#"
                                className="social__link social__link--style1"
                              >
                                <i className="fab fa-instagram"></i>
                              </Link>
                            </li>
                            <li className="social__item">
                              <Link
                                href="#"
                                className="social__link social__link--style1"
                              >
                                <i className="fa-brands fa-linkedin-in"></i>
                              </Link>
                            </li>
                            <li className="social__item">
                              <Link
                                href="#"
                                className="social__link social__link--style1"
                              >
                                <i className="fab fa-youtube"></i>
                              </Link>
                            </li>
                            <li className="social__item">
                              <Link
                                href="/signin"
                                className="social__link social__link--style1 d-sm-none d-md-block"
                              >
                                <i className="fab fa-twitter"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SIDEBAR END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
