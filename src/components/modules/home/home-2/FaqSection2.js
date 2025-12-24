"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FaqSection2() {
  const [activeId1, setActiveId1] = useState("faqBody1");
  const [activeId2, setActiveId2] = useState("faqBody9");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  const toggleAccordion1 = (id) => {
    setActiveId1((prev) => (prev === id ? null : id));
  };
  const toggleAccordion2 = (id) => {
    setActiveId2((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq padding-top padding-bottom of-hidden bg-color-5">
      <div className="section-header section-header--max57">
        <h2 className="mb-15 mt-minus-10">
          <span>Frequently</span> Asked questions
        </h2>
        <p>
          Hey there! Got questions? We&apos;ve got answers. Check out our FAQ
          page for all the deets. Still not satisfied? Hit us up.
        </p>
      </div>
      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-4 justify-content-between">
            {/* Column 1 */}
            <div className="col-lg-6">
              <div
                className="accordion accordion--style2"
                id="faqAccordion1"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row gy-3">
                  {/* Item 1 */}
                  <div className="col-12">
                    <div className="accordion__item">
                      <div className="accordion__header" id="faq1">
                        <button
                          className={`accordion__button ${
                            activeId1 === "faqBody1" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion1("faqBody1")}
                          aria-expanded={activeId1 === "faqBody1"}
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
                        className={`accordion-collapse collapse ${
                          activeId1 === "faqBody1" ? "show" : ""
                        }`}
                        aria-labelledby="faq1"
                        data-bs-parent="#faqAccordion1"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            This is an artificial intelligence integrated tool
                            by which you can automate your PTE and IELTS mock
                            test systems in your educational systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="col-12">
                    <div className="accordion__item">
                      <div className="accordion__header" id="faq2">
                        <button
                          className={`accordion__button ${
                            activeId1 === "faqBody2" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion1("faqBody2")}
                          aria-expanded={activeId1 === "faqBody2"}
                          aria-controls="faqBody2"
                        >
                          <span className="accordion__button-content">
                            What are the disadvantages trading?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody2"
                        className={`accordion-collapse collapse ${
                          activeId1 === "faqBody2" ? "show" : ""
                        }`}
                        aria-labelledby="faq2"
                        data-bs-parent="#faqAccordion1"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            You don’t need to worry, the interface is
                            user-friendly. Anyone can use it smoothly. Our user
                            manual will help you to solve your problem. If you
                            do find yourself needing some help, feel free to
                            reach out to our support team through our Contact
                            page, or visit our Support Center.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="col-12">
                    <div className="accordion__item">
                      <div className="accordion__header" id="faq3">
                        <button
                          className={`accordion__button ${
                            activeId1 === "faqBody3" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion1("faqBody3")}
                          aria-expanded={activeId1 === "faqBody3"}
                          aria-controls="faqBody3"
                        >
                          <span className="accordion__button-content">
                            Is online trading safe?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody3"
                        className={`accordion-collapse collapse ${
                          activeId1 === "faqBody3" ? "show" : ""
                        }`}
                        aria-labelledby="faq3"
                        data-bs-parent="#faqAccordion1"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="col-12">
                    <div className="accordion__item">
                      <div className="accordion__header" id="faq4">
                        <button
                          className={`accordion__button ${
                            activeId1 === "faqBody4" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion1("faqBody4")}
                          aria-expanded={activeId1 === "faqBody4"}
                          aria-controls="faqBody4"
                        >
                          <span className="accordion__button-content">
                            What is online trading, how it work?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody4"
                        className={`accordion-collapse collapse ${
                          activeId1 === "faqBody4" ? "show" : ""
                        }`}
                        aria-labelledby="faq4"
                        data-bs-parent="#faqAccordion1"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="col-12">
                    <div className="accordion__item">
                      <div className="accordion__header" id="faq5">
                        <button
                          className={`accordion__button ${
                            activeId1 === "faqBody5" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion1("faqBody5")}
                          aria-expanded={activeId1 === "faqBody5"}
                          aria-controls="faqBody5"
                        >
                          <span className="accordion__button-content">
                            Which app is best for online trading?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody5"
                        className={`accordion-collapse collapse ${
                          activeId1 === "faqBody5" ? "show" : ""
                        }`}
                        aria-labelledby="faq5"
                        data-bs-parent="#faqAccordion1"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-6">
              <div
                className="accordion accordion--style2"
                id="faqAccordion2"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row gy-3">
                  {/* Item 6 */}
                  <div className="col-12">
                    <div className="accordion__item border-0">
                      <div className="accordion__header" id="faq6">
                        <button
                          className={`accordion__button ${
                            activeId2 === "faqBody6" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion2("faqBody6")}
                          aria-expanded={activeId2 === "faqBody6"}
                          aria-controls="faqBody6"
                        >
                          <span className="accordion__button-content">
                            What level of support do you offer?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody6"
                        className={`accordion-collapse collapse ${
                          activeId2 === "faqBody6" ? "show" : ""
                        }`}
                        aria-labelledby="faq6"
                        data-bs-parent="#faqAccordion2"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 7 */}
                  <div className="col-12">
                    <div className="accordion__item border-0">
                      <div className="accordion__header" id="faq7">
                        <button
                          className={`accordion__button ${
                            activeId2 === "faqBody7" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion2("faqBody7")}
                          aria-expanded={activeId2 === "faqBody7"}
                          aria-controls="faqBody7"
                        >
                          <span className="accordion__button-content">
                            What kind of reporting do you provide?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody7"
                        className={`accordion-collapse collapse ${
                          activeId2 === "faqBody7" ? "show" : ""
                        }`}
                        aria-labelledby="faq7"
                        data-bs-parent="#faqAccordion2"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 8 */}
                  <div className="col-12">
                    <div className="accordion__item border-0">
                      <div className="accordion__header" id="faq8">
                        <button
                          className={`accordion__button ${
                            activeId2 === "faqBody8" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion2("faqBody8")}
                          aria-expanded={activeId2 === "faqBody8"}
                          aria-controls="faqBody8"
                        >
                          <span className="accordion__button-content">
                            How do you ensure confidentiality?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody8"
                        className={`accordion-collapse collapse ${
                          activeId2 === "faqBody8" ? "show" : ""
                        }`}
                        aria-labelledby="faq8"
                        data-bs-parent="#faqAccordion2"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 9 */}
                  <div className="col-12">
                    <div className="accordion__item border-0">
                      <div className="accordion__header" id="faq9">
                        <button
                          className={`accordion__button ${
                            activeId2 === "faqBody9" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion2("faqBody9")}
                          aria-expanded={activeId2 === "faqBody9"}
                          aria-controls="faqBody9"
                        >
                          <span className="accordion__button-content">
                            If I&apos;m not satisfied service?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody9"
                        className={`accordion-collapse collapse ${
                          activeId2 === "faqBody9" ? "show" : ""
                        }`}
                        aria-labelledby="faq9"
                        data-bs-parent="#faqAccordion2"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 10 */}
                  <div className="col-12">
                    <div className="accordion__item border-0">
                      <div className="accordion__header" id="faq10">
                        <button
                          className={`accordion__button ${
                            activeId2 === "faqBody10" ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion2("faqBody10")}
                          aria-expanded={activeId2 === "faqBody10"}
                          aria-controls="faqBody10"
                        >
                          <span className="accordion__button-content">
                            Can you provide case studies?
                          </span>
                          <span className="accordion__button-plusicon"></span>
                        </button>
                      </div>
                      <div
                        id="faqBody10"
                        className={`accordion-collapse collapse ${
                          activeId2 === "faqBody10" ? "show" : ""
                        }`}
                        aria-labelledby="faq10"
                        data-bs-parent="#faqAccordion2"
                      >
                        <div className="accordion__body">
                          <p className="mb-0">
                            Definitely, you can give permission to all of your
                            team members and can set their roles based on their
                            position to manage it in your institution.
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
      </div>
    </section>
  );
}
