"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavbarHomeTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-bs-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header-section header-section--style2 ${
          isFixed ? "header-fixed fadeInUp" : ""
        }`}
      >
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo-dark.png" alt="logo" />
                </Link>
              </div>
              <div className="header-content d-flex align-items-center">
                <div className={`menu-area ${mobileMenuOpen ? "active" : ""}`}>
                  <ul className="menu menu--style2">
                    <li className="menu-item-has-children">
                      <Link href="/">Homes </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/">Home One</Link>
                        </li>
                        <li>
                          <Link href="/index1-light">
                            Home Light <span className="style1">Light</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index1-dark">
                            Home Dark <span className="style2">Dark</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-2">Home Two</Link>
                        </li>
                        <li>
                          <Link href="/index-2-light">
                            Home Light <span className="style1">Light</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2-dark">
                            Home Dark <span className="style2">Dark</span>{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/service">Services</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/service">Services</Link>
                        </li>
                        <li>
                          <Link href="/service/details">Services Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#0">About</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/price">Price</Link>
                        </li>
                        <li>
                          <Link href="/team-1">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team 2</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#0">Pages</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link href="/blog-sidebar">Blog - Side Bar</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Blog Details</Link>
                        </li>
                        <li>
                          <Link href="/signup">Sign Up</Link>
                        </li>
                        <li>
                          <Link href="/signup-2">Sign Up 2</Link>
                        </li>
                        <li>
                          <Link href="/signin">Sign In</Link>
                        </li>
                        <li>
                          <Link href="/signin-2">Sign In 2</Link>
                        </li>
                        <li>
                          <Link href="/forgot-pass">Reset Password</Link>
                        </li>
                        <li>
                          <Link href="/forgot-pass-2">Reset Password 2</Link>
                        </li>
                        <li>
                          <Link href="/not-found">404 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-action">
                  <div className="menu-area">
                    <div className="header-btn">
                      <Link
                        href="/signup"
                        className="trk-btn trk-btn--border trk-btn--primary1"
                      >
                        <span>Join Now</span>
                      </Link>
                    </div>

                    {/* ===============>> light&dark switch start here <<================= */}
                    <div
                      className="lightdark-switch"
                      style={{ marginLeft: "15px" }}
                    >
                      <span
                        className="dark-btn"
                        id="btnSwitch"
                        onClick={toggleTheme}
                        style={{ cursor: "pointer" }}
                      >
                        {mounted && (
                          <img
                            src={
                              theme === "dark"
                                ? "/images/icon/sun.svg"
                                : "/images/icon/moon.svg"
                            }
                            alt="lightdark-switch"
                            className="swtich-icon"
                          />
                        )}
                      </span>
                    </div>
                    {/* ===============>> light&dark switch end here <<================= */}

                    <div
                      className={`header-bar d-lg-none header-bar--style2 ${
                        mobileMenuOpen ? "active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHomeTwo;
