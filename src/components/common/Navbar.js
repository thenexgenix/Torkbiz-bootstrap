"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="header-section bg-color-3">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">

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

            <div className="menu-area">
              <ul className="menu menu--style1">

                <li>
                  <a href="#0">Homes</a>
                  <ul className="submenu">
                    <li><Link href="/">Home One</Link></li>
                    <li><Link href="/index1-light">Home Light <span className="style1">Light</span></Link></li>
                    <li><Link href="/index1-dark">Home Dark <span className="style2">Dark</span></Link></li>
                    <li><Link href="/index-2">Home Two</Link></li>
                    <li><Link href="/index-2-light">Home Light <span className="style1">Light</span></Link></li>
                    <li><Link href="/index-2-dark">Home Dark <span className="style2">Dark</span></Link></li>
                  </ul>
                </li>

                <li>
                  <a href="#0">Services</a>
                  <ul className="submenu">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/service-details">Services Details</Link></li>
                  </ul>
                </li>

                <li>
                  <a href="#0">About</a>
                  <ul className="submenu">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/price">Price</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/team-2">Team 2</Link></li>
                    <li><Link href="/team-details">Team Details</Link></li>
                  </ul>
                </li>

                <li>
                  <a href="#0">Pages</a>
                  <ul className="submenu">
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/blog-sidebar">Blog - Side Bar</Link></li>
                    <li><Link href="/blog-details">Blog Details</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                    <li><Link href="/signup-2">Sign Up 2</Link></li>
                    <li><Link href="/signin">Sign In</Link></li>
                    <li><Link href="/signin-2">Sign In 2</Link></li>
                    <li><Link href="/forgot-pass">Reset Password</Link></li>
                    <li><Link href="/forgot-pass-2">Reset Password 2</Link></li>
                    <li><Link href="/404">404 Error</Link></li>
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

                <div className="header-bar d-lg-none header-bar--style1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
