"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function secondResetPassword() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
    {/* Light / Dark Switch (same as Navbar) */}
    <div className="lightdark-switch">
      <span
        className="dark-btn"
        onClick={() => {
          const html = document.documentElement;
          const current = html.getAttribute("data-bs-theme") || "light";
          const next = current === "light" ? "dark" : "light";
          html.setAttribute("data-bs-theme", next);
          localStorage.setItem("theme", next);
        }}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            document.documentElement.getAttribute("data-bs-theme") === "light"
              ? "#000"
              : "#fff",
        }}
      >
        <Image
          src={
            typeof window !== "undefined" &&
            document.documentElement.getAttribute("data-bs-theme") === "dark"
              ? "/images/icon/sun.svg"
              : "/images/icon/moon.svg"
          }
          alt="theme toggle"
          width={20}
          height={20}
          className="swtich-icon"
        />
      </span>
    </div>

    <section className="account padding-top padding-bottom bg-color-6">
      <div className="container">
        <div
          className="account__wrapper"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="account__inner">
            <div className="row gx-4 align-items-center">
              {/* Left Side: Image */}
              <div className="col-lg-6">
                <div className="account__thumb">
                  <Image
                    src="/images/account/3.png"
                    alt="account-image"
                    width={636}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="col-lg-6">
                <div className="account__content account__content--style2">
                  {/* Account Title */}
                  <div className="account__header">
                    <h2>Reset password</h2>
                    <p className="mb-0">
                      Hey there! Forgot your password? No worries! Just click on
                      &quot;Reset password&quot; and follow the steps. Easy as
                      pie!
                    </p>
                  </div>

                  {/* Account Form */}
                  <form
                    action="#"
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary1 d-block mt-4"
                    >
                      Reset password
                    </button>
                  </form>

                  {/* Switch Link */}
                  <div className="account__switch">
                    <p>
                      <Link href="/signin-2">
                        <i className="fa-solid fa-arrow-left-long"></i> Back to{" "}
                        <span>Login</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
