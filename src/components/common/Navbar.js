"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  //  THEME 
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  // Scroll Logic
  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "dark";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };
  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  if (!mounted) return null;

  return (
    <>
      <header
        className={`header-section bg-color-3 ${
          scrolled ? "header-fixed" : ""
        }`}
      >
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              {/* --- Logo --- */}
              <div className="logo">
                <Link href="/">
                  <Image
                    className="dark"
                    src={
                      theme === "dark"
                        ? "/images/logo/logo-white.png"
                        : "/images/logo/logo.png"
                    }
                    alt="logo"
                    width={150}
                    height={40}
                    priority
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </div>

              {/* --- Menu --- */}
              <div className={`menu-area ${menuActive ? "active" : ""}`}>
                <ul className="menu menu--style1">
                  <li className="menu-item-has-children">
                    <Link href="/">Homes</Link>
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

                  <li className="menu-item-has-children">
                    <Link href="/services">Services</Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Services Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/about">About</Link>
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

                  <li className="menu-item-has-children">
                    <Link href="/blogs">Pages</Link>
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

                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* --- Actions --- */}
              <div className="header-action menu-area">
                <div className="header-btn">
                  <Link
                    href="/signup"
                    className="trk-btn trk-btn--border trk-btn--primary1"
                  >
                    <span>Join Now</span>
                  </Link>
                </div>

                {/* --- LIGHT/DARK SWITCH --- */}
                <div className="lightdark-switch">
                  <span
                    className="dark-btn"
                    id="btnSwitch"
                    onClick={toggleTheme}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        theme === "light" ? "#000000" : "#ffffff",
                    }}
                  >
                    {theme === "light" ? (
                      <Moon
                        size={20}
                        color="#ffffff"
                        fill="#ffffff"
                        className="swtich-icon"
                      />
                    ) : (
                      <Sun
                        size={20}
                        color="#000000"
                        fill="#000000"
                        className="swtich-icon"
                      />
                    )}
                  </span>
                </div>

                {/* --- Mobile Toggle --- */}
                <div
                  className={`header-bar d-lg-none header-bar--style1 ${
                    menuActive ? "active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-action {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        @media (min-width: 992px) {
          .d-lg-none {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
