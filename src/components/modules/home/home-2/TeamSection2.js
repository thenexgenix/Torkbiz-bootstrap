"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamSection2() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
    setMounted(true);
    const htmlTheme = document.documentElement.getAttribute("data-bs-theme");
    setTheme(htmlTheme || "light");
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-bs-theme");
          setTheme(newTheme || "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const getTeamImage = (src) => {
    if (!mounted) return src;
    if (theme === "dark") {
      return src.replace(".png", "-dark.png");
    }
    return src;
  };

  if (!mounted) return null;

  return (
    <section className="team padding-top padding-bottom bg-color-5">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-10">
          Meet our <span>advisers</span>
        </h2>
        <p>
          Hey everyone, meet our amazing advisers! They&apos;re here to help and
          guide us through anything.
        </p>
      </div>
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">
            {/* Team Member 1 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/1.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Shamika Thompson
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Business Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 2 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/2.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Mechale smith
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Financial Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 3 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/3.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Youn Choe
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Operation Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 4 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/4.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Dang Xuan
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Marketing Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 5 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/5.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Kimberly Jones
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">HR Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 6 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/6.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Rim Kyung
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Technology Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 7 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/7.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Mary David
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Customer Consultant</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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

            {/* Team Member 8 */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team__item team__item--shape"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style2">
                    <Image
                      src={getTeamImage("/images/team/home2/8.png")}
                      alt="Team Image"
                      className="dark"
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="team__item-content ">
                    <div className="team__item-author team__item-author--style2">
                      <div className="team__item-authorinfo">
                        <h6 className="mb-0">
                          <Link href="/team-details" className="stretched-link">
                            Anna Morozov
                          </Link>{" "}
                        </h6>
                        <p className="mb-0">Project Manager</p>
                      </div>
                      <div className="team__item-authorsocial">
                        <ul className="social justify-content-center">
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3 "
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style3"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="/signin"
                              className="social__link social__link--style3"
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
        </div>
      </div>
    </section>
  );
}
