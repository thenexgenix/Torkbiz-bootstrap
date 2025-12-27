"use client";

import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState("one");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="feature bg-color-4">
      <div className="container">
        <div className="feature__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            {/* --- LEFT SIDE: Navigation --- */}
            <div className="col-md-6 col-lg-5">
              <div
                className="feature__content"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="feature__content-inner">
                  <div className="section-header">
                    <h2 className="mb-15">
                      <span>benefits </span>We offer
                    </h2>
                    <p className="mb-0">
                      Unlock the full potential of our product with our amazing
                      features and top-notch.
                    </p>
                  </div>

                  <div className="feature__nav">
                    <div
                      className="nav nav--feature flex-column nav-pills"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      {/* Tab 1 Trigger */}
                      <div
                        className={`nav-link ${
                          activeTab === "one" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("one")}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>
                                up to date with market trends and best practices
                                in your industry.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab 2 Trigger */}
                      <div
                        className={`nav-link ${
                          activeTab === "two" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("two")}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>
                                Get help from pros with diverse industry
                                experience.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab 3 Trigger */}
                      <div
                        className={`nav-link ${
                          activeTab === "three" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("three")}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>
                                Get personalized advice for your business needs.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab 4 Trigger */}
                      <div
                        className={`nav-link ${
                          activeTab === "four" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("four")}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>
                                All transactions are free for Pro Traders
                                members.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: Content Images --- */}
            <div className="col-md-6 col-lg-6">
              <div
                className="feature__thumb"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="feature__thumb-inner">
                  <div className="tab-content">
                    {/* Tab 1 Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "one" ? "show active" : ""
                      }`}
                      style={{
                        display: activeTab === "one" ? "block" : "none",
                      }}
                    >
                      <div className="feature__image floating-content">
                        <Image
                          src="/images/feature/1.png"
                          alt="Feature image"
                          width={600}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="floating-content__left-top floating-content__left-top--style2">
                          <div className="floating-content__item text-center p-20">
                            <Image
                              className="mb-15"
                              src="/images/feature/5.png"
                              alt="rating"
                              width={100}
                              height={20}
                              style={{ width: "auto", height: "auto" }}
                            />
                            <p className="style2">Success Rate</p>
                          </div>
                        </div>
                        <div className="floating-content__bottom-right floating-content__bottom-right--style2">
                          <div className="floating-content__item floating-content__item--style2 d-flex align-items-center">
                            <h3>
                              <span className="purecounter">
                                {activeTab === "one" && (
                                  <CountUp
                                    start={0}
                                    end={24}
                                    duration={3}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                  >
                                   
                                    {({ countUpRef }) => (
                                      <span ref={countUpRef} />
                                    )}
                                  </CountUp>
                                )}
                              </span>
                              /7
                            </h3>
                            <p className="ms-3 style2">Online service</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 2 Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "two" ? "show active" : ""
                      }`}
                      style={{
                        display: activeTab === "two" ? "block" : "none",
                      }}
                    >
                      <div className="feature__image floating-content">
                        <Image
                          src="/images/feature/2.png"
                          alt="Feature image"
                          width={600}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="floating-content__left-top">
                          <div className="floating-content__item text-center p-20">
                            <Image
                              className="mb-15"
                              src="/images/feature/5.png"
                              alt="rating"
                              width={100}
                              height={20}
                              style={{ width: "auto", height: "auto" }}
                            />
                            <p className="style2">Success Rate</p>
                          </div>
                        </div>
                        <div className="floating-content__bottom-right">
                          <div className="floating-content__item floating-content__item--style2 d-flex align-items-center">
                            <h3>
                              <span className="purecounter">
                                {activeTab === "two" && (
                                  <CountUp
                                    start={0}
                                    end={24}
                                    duration={3}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                  >
                                    {/* FIX APPLIED BELOW */}
                                    {({ countUpRef }) => (
                                      <span ref={countUpRef} />
                                    )}
                                  </CountUp>
                                )}
                              </span>
                              /7
                            </h3>
                            <p className="ms-3 style2">Online service</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 3 Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "three" ? "show active" : ""
                      }`}
                      style={{
                        display: activeTab === "three" ? "block" : "none",
                      }}
                    >
                      <div className="feature__image floating-content">
                        <Image
                          src="/images/feature/3.png"
                          alt="Feature image"
                          width={600}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="floating-content__left-top">
                          <div className="floating-content__item text-center p-20">
                            <Image
                              className="mb-15"
                              src="/images/feature/5.png"
                              alt="rating"
                              width={100}
                              height={20}
                              style={{ width: "auto", height: "auto" }}
                            />
                            <p className="style2">Success Rate</p>
                          </div>
                        </div>
                        <div className="floating-content__bottom-right">
                          <div className="floating-content__item floating-content__item--style2 d-flex align-items-center">
                            <h3>
                              <span className="purecounter">
                                {activeTab === "three" && (
                                  <CountUp
                                    start={0}
                                    end={24}
                                    duration={3}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                  >
                                    {({ countUpRef }) => (
                                      <span ref={countUpRef} />
                                    )}
                                  </CountUp>
                                )}
                              </span>
                              /7
                            </h3>
                            <p className="ms-3 style2">Online service</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 4 Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "four" ? "show active" : ""
                      }`}
                      style={{
                        display: activeTab === "four" ? "block" : "none",
                      }}
                    >
                      <div className="feature__image floating-content">
                        <Image
                          src="/images/feature/4.png"
                          alt="Feature image"
                          width={600}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="floating-content__left-top">
                          <div className="floating-content__item text-center p-20">
                            <Image
                              className="mb-15"
                              src="/images/feature/5.png"
                              alt="rating"
                              width={100}
                              height={20}
                              style={{ width: "auto", height: "auto" }}
                            />
                            <p className="style2">Success Rate</p>
                          </div>
                        </div>
                        <div className="floating-content__bottom-right">
                          <div className="floating-content__item floating-content__item--style2 d-flex align-items-center">
                            <h3>
                              <span className="purecounter">
                                {activeTab === "four" && (
                                  <CountUp
                                    start={0}
                                    end={24}
                                    duration={3}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                  >
                                    {({ countUpRef }) => (
                                      <span ref={countUpRef} />
                                    )}
                                  </CountUp>
                                )}
                              </span>
                              /7
                            </h3>
                            <p className="ms-3 style2">Online service</p>
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
      </div>

      <div className="feature__shape">
        {/* Shape images*/}
        <span className="feature__shape-item feature__shape-item--1">
          <Image
            src="/images/about/shape/1.png"
            alt="shape-icon"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="feature__shape-item feature__shape-item--2">
          <Image
            src="/images/about/shape/2.png"
            alt="shape-icon"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="feature__shape-item feature__shape-item--3">
          <Image
            src="/images/about/shape/3.png"
            alt="shape-icon"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="feature__shape-item feature__shape-item--4">
          <Image
            src="/images/about/shape/4.png"
            alt="shape-icon"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
}
