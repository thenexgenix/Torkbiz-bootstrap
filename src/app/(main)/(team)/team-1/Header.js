import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className="page-header bg-color-1">
      <div className="container">
        <div
          className="page-header__content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Team</h2>
          <nav
            style={{ "--bs-breadcrumb-divider": "'/'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Team
              </li>
            </ol>
          </nav>
        </div>
        <div className="page-header__shape">
          <span className="page-header__shape-item page-header__shape-item--1">
            <Image
              src="/images/icon/page-header/1.png"
              alt="shpae-icon"
              width={65}
              height={65}
              style={{ width: "auto", height: "auto" }}
            />
          </span>
          <span className="page-header__shape-item page-header__shape-item--2">
            <Image
              src="/images/icon/page-header/2.png"
              alt="shpae-icon"
              width={65}
              height={65}
              style={{ width: "auto", height: "auto" }}
            />
          </span>
          <span className="page-header__shape-item page-header__shape-item--3">
            <Image
              src="/images/icon/page-header/3.png"
              alt="shpae-icon"
              width={65}
              height={65}
              style={{ width: "auto", height: "auto" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
