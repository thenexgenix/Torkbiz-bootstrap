"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
// import '@/styles/sass/layout/_header.scss';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSubMenuClick = (e, menuName) => {
    if (isMobile) {
      e.preventDefault(); 
      setActiveMenu(activeMenu === menuName ? null : menuName);
    }
  };

  return (
    <header className="header-section bg-color-3">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/*LOGO*/}
            <div className="logo">
              <Link href="/">
                <Image
                  className="dark"
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={150}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/*MENU AREA*/}
            <div className="menu-area">
              <ul className={`menu menu--style1 ${menuOpen ? "active" : ""}`}>
                {/* HOME */}
                <li
                  className={`menu-item-has-children ${
                    activeMenu === "home" ? "active-state" : ""
                  }`}
                >
                  <Link href="/" onClick={(e) => handleSubMenuClick(e, "home")}>
                    Homes
                  </Link>
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
                        Home Dark <span className="style2">Dark</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2">Home Two</Link>
                    </li>
                    <li>
                      <Link href="/index-2-light">
                        Home Light <span className="style1">Light</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2-dark">
                        Home Dark <span className="style2">Dark</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* SERVICES */}
                <li
                  className={`menu-item-has-children ${
                    activeMenu === "services" ? "active-state" : ""
                  }`}
                >
                  <Link
                    href="/services"
                    onClick={(e) => handleSubMenuClick(e, "services")}
                  >
                    Services
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Services Details</Link>
                    </li>
                  </ul>
                </li>

                {/* ABOUT */}
                <li
                  className={`menu-item-has-children ${
                    activeMenu === "about" ? "active-state" : ""
                  }`}
                >
                  <Link href="/about" onClick={(e) => handleSubMenuClick(e, "about")}>
                    About
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/price">Price</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/team-2">Team 2</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Team Details</Link>
                    </li>
                  </ul>
                </li>

                {/* PAGES */}
                <li
                  className={`menu-item-has-children ${
                    activeMenu === "pages" ? "active-state" : ""
                  }`}
                >
                  <Link href="/pages" onClick={(e) => handleSubMenuClick(e, "pages")}>
                    Pages
                  </Link>
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
                      <Link href="/404">404 Error</Link>
                    </li>
                  </ul>
                </li>

                {/* CONTACT */}
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* --- ACTION BUTTONS & TOGGLER --- */}
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

                {/* Mobile Toggle Button */}
                <div
                  className="header-bar d-lg-none header-bar--style1"
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{ cursor: "pointer", color: "#fff" }}
                >
                  <Menu size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
