"use client";

import Link from "next/link";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="pricing padding-top padding-bottom bg-color-4">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-10">
          <span>pricings </span>We offer
        </h2>
        <p>
          We offer the best pricings around - from installations to repairs,
          maintenance, and more!
        </p>
      </div>
      <div className="container">
        <div className="pricing__wrapper">
          <div className="row g-4 align-items-center">
            {/* Pricing Item 1: Basic */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="pricing__item-inner">
                  <div className="pricing__item-content">
                    {/* pricing top part */}
                    <div className="pricing__item-top">
                      <h6 className="mb-15">Basic</h6>
                      <h3 className="mb-25">
                        $99/<span>Monthly</span>{" "}
                      </h3>
                    </div>

                    {/* pricing middle part */}
                    <div className="pricing__item-middle">
                      <ul className="pricing__list">
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Weekly online meeting
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Unlimited learning access
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          24/7 technical support
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Personal training
                        </li>
                      </ul>
                    </div>

                    {/* pricing bottom part */}
                    <div className="pricing__item-bottom">
                      <Link href="/signup" className="trk-btn trk-btn--outline">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Item 2: Standard (Active) */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="pricing__item-inner active">
                  <div className="pricing__item-content">
                    {/* pricing top part */}
                    <div className="pricing__item-top">
                      <h6 className="mb-15">standard</h6>
                      <h3 className="mb-25">
                        $149/<span>Monthly</span>{" "}
                      </h3>
                    </div>

                    {/* pricing middle part */}
                    <div className="pricing__item-middle">
                      <ul className="pricing__list">
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Weekly online meeting
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Unlimited learning access
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          24/7 technical support
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Personal training
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Business analysis
                        </li>
                      </ul>
                    </div>

                    {/* pricing bottom part */}
                    <div className="pricing__item-bottom">
                      <Link
                        href="/signup"
                        className="trk-btn trk-btn--outline active"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Item 3: Premium */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="pricing__item-inner">
                  <div className="pricing__item-content">
                    {/* pricing top part */}
                    <div className="pricing__item-top">
                      <h6 className="mb-15">premium</h6>
                      <h3 className="mb-25">
                        $199/<span>Monthly</span>{" "}
                      </h3>
                    </div>

                    {/* pricing middle part */}
                    <div className="pricing__item-middle">
                      <ul className="pricing__list">
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          With all standard features
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Unlimited learning access
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          24/7 technical support
                        </li>
                        <li className="pricing__list-item">
                          <span>
                            <Image
                              src="/images/icon/check.svg"
                              alt="check"
                              className="dark"
                              width={24}
                              height={24}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </span>
                          Personal training
                        </li>
                      </ul>
                    </div>

                    {/* pricing bottom part */}
                    <div className="pricing__item-bottom">
                      <Link href="/signup" className="trk-btn trk-btn--outline">
                        Choose Plan
                      </Link>
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
