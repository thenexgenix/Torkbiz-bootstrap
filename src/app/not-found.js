
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    document.title = "404 Page | Torkbiz";
  }, []);

  return (
    <>
      {/* ================= Page Header ================= */}
      <section className="page-header bg-color-1">
        <div className="container">
          <div
            className="page-header__content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>404 Page</h2>

            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  404 page
                </li>
              </ol>
            </nav>
          </div>

          {/* Shapes */}
          <div className="page-header__shape">
            <span className="page-header__shape-item page-header__shape-item--1">
              <Image
                src="/images/icon/page-header/1.png"
                alt="shape"
                width={60}
                height={60}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            <span className="page-header__shape-item page-header__shape-item--2">
              <Image
                src="/images/icon/page-header/2.png"
                alt="shape"
                width={60}
                height={60}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            <span className="page-header__shape-item page-header__shape-item--3">
              <Image
                src="/images/icon/page-header/3.png"
                alt="shape"
                width={60}
                height={60}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
          </div>
        </div>
      </section>

      {/* ================= 404 Section ================= */}
      <div className="error padding-top padding-bottom">
        <div className="container">
          <div className="error__wrapper">
            <div
              className="error__inner"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="error__thumb text-center">
                <Image
                  src="/images/others/error.png"
                  alt="404 image"
                  width={900}
                  height={650}
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </div>

              <div className="error__content text-center">
                <h2>
                  <span>ooops!</span> page not found
                </h2>

                <p>
                  Oops! It looks like you&apos;re lost. The page you were
                  looking for couldn&apos;t be found. Don&apos;t worry, it
                  happens to the best of us.
                </p>

                <Link
                  href="/"
                  className="trk-btn trk-btn--border trk-btn--primary1"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}