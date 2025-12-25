"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarHomeTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); 
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
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null); 
  };
  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null); 
    } else {
      setOpenSubMenu(index); 
    }
  };

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
                  <Image
                    src="/images/logo/logo-dark.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }} 
                    priority
                  />
                </Link>
              </div>

              <div className="header-content d-flex align-items-center">
                {/* Mobile Menu Content */}
                <div className={`menu-area ${mobileMenuOpen ? "active" : ""}`}>
                  <ul className="menu menu--style2">
                    {/* MENU ITEM 1: HOMES */}
                    <li
                      className={`menu-item-has-children ${
                        openSubMenu === 1 ? "active" : ""
                      }`}
                    >
                      <Link href="#0" onClick={() => toggleSubMenu(1)}>
                        Homes
                      </Link>
                      <ul
                        className="submenu"
                        style={{ display: openSubMenu === 1 ? "block" : "" }}
                      >
                        <li>
                          <Link href="/" onClick={closeMobileMenu}>
                            Home One
                          </Link>
                        </li>
                        <li>
                          <Link href="/index1-light" onClick={closeMobileMenu}>
                            Home Light <span className="style1">Light</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index1-dark" onClick={closeMobileMenu}>
                            Home Dark <span className="style2">Dark</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-2" onClick={closeMobileMenu}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2-light" onClick={closeMobileMenu}>
                            Home Light <span className="style1">Light</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2-dark" onClick={closeMobileMenu}>
                            Home Dark <span className="style2">Dark</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* MENU ITEM 2: SERVICES */}
                    <li
                      className={`menu-item-has-children ${
                        openSubMenu === 2 ? "active" : ""
                      }`}
                    >
                      <Link href="#0" onClick={() => toggleSubMenu(2)}>
                        Services
                      </Link>
                      <ul
                        className="submenu"
                        style={{ display: openSubMenu === 2 ? "block" : "" }}
                      >
                        <li>
                          <Link href="/service" onClick={closeMobileMenu}>
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/service/details"
                            onClick={closeMobileMenu}
                          >
                            Services Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* MENU ITEM 3: ABOUT */}
                    <li
                      className={`menu-item-has-children ${
                        openSubMenu === 3 ? "active" : ""
                      }`}
                    >
                      <Link href="#0" onClick={() => toggleSubMenu(3)}>
                        About
                      </Link>
                      <ul
                        className="submenu"
                        style={{ display: openSubMenu === 3 ? "block" : "" }}
                      >
                        <li>
                          <Link href="/about" onClick={closeMobileMenu}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/price" onClick={closeMobileMenu}>
                            Price
                          </Link>
                        </li>
                        <li>
                          <Link href="/team-1" onClick={closeMobileMenu}>
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link href="/team-2" onClick={closeMobileMenu}>
                            Team 2
                          </Link>
                        </li>
                        <li>
                          <Link href="/team-details" onClick={closeMobileMenu}>
                            Team Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* MENU ITEM 4: PAGES */}
                    <li
                      className={`menu-item-has-children ${
                        openSubMenu === 4 ? "active" : ""
                      }`}
                    >
                      <Link href="#0" onClick={() => toggleSubMenu(4)}>
                        Pages
                      </Link>
                      <ul
                        className="submenu"
                        style={{ display: openSubMenu === 4 ? "block" : "" }}
                      >
                        <li>
                          <Link href="/blogs" onClick={closeMobileMenu}>
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-sidebar" onClick={closeMobileMenu}>
                            Blog - Side Bar
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details" onClick={closeMobileMenu}>
                            Blog Details
                          </Link>
                        </li>
                        <li>
                          <Link href="/signup" onClick={closeMobileMenu}>
                            Sign Up
                          </Link>
                        </li>
                        <li>
                          <Link href="/signup-2" onClick={closeMobileMenu}>
                            Sign Up 2
                          </Link>
                        </li>
                        <li>
                          <Link href="/signin" onClick={closeMobileMenu}>
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link href="/signin-2" onClick={closeMobileMenu}>
                            Sign In 2
                          </Link>
                        </li>
                        <li>
                          <Link href="/forgot-pass" onClick={closeMobileMenu}>
                            Reset Password
                          </Link>
                        </li>
                        <li>
                          <Link href="/forgot-pass-2" onClick={closeMobileMenu}>
                            Reset Password 2
                          </Link>
                        </li>
                        <li>
                          <Link href="/not-found" onClick={closeMobileMenu}>
                            404 Error
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/contact" onClick={closeMobileMenu}>
                        Contact Us
                      </Link>
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

                    {/* ===============>> light&dark switch <<================= */}
                    <div
                      className="lightdark-switch"
                      style={{ marginLeft: "15px" }}
                    >
                      <span
                        className="dark-btn"
                        onClick={toggleTheme}
                        style={{ cursor: "pointer" }}
                      >
                        {mounted && (
                          <Image
                            src={
                              theme === "dark"
                                ? "/images/icon/sun.svg"
                                : "/images/icon/moon.svg"
                            }
                            alt="lightdark-switch"
                            width={22}
                            height={22}
                            style={{ width: "auto", height: "auto" }}
                          />
                        )}
                      </span>
                    </div>

                    {/* Hamburger Menu Icon */}
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
