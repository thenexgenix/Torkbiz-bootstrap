"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondResetPassword() {
  // Initialize theme ONCE (no effect, no extra render)
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  // Sync theme with DOM + localStorage (side effect only)
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* ===== Light / Dark Switch (EXACT like Navbar) ===== */}
      <div className="lightdark-switch">
        <span
          className="dark-btn"
          onClick={toggleTheme}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#000000" : "#ffffff",
          }}
        >
          {theme === "light" ? (
            <Image
              src="/images/icon/moon.svg"
              alt="Dark mode"
              width={20}
              height={20}
              className="swtich-icon"
              style={{ width: "auto", height: "auto" }}
            />
          ) : (
            <Image
              src="/images/icon/sun.svg"
              alt="Light mode"
              width={20}
              height={20}
              className="swtich-icon"
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </span>
      </div>

      {/* ===== Reset Password Section ===== */}
      <section className="account padding-top padding-bottom bg-color-6">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="account__inner">
              <div className="row gx-4 align-items-center">
                {/* LEFT IMAGE */}
                <div className="col-lg-6">
                  <div className="account__thumb">
                    <Image
                      src="/images/account/3.png"
                      alt="account-image"
                      width={636}
                      height={600}
                      priority
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-6">
                  <div className="account__content account__content--style2">
                    <div className="account__header">
                      <h2>Reset password</h2>
                      <p className="mb-0">
                        Hey there! Forgot your password? No worries! Just click
                        on &quot;Reset password&quot; and follow the steps. Easy
                        as pie!
                      </p>
                    </div>

                    <form
                      action="#"
                      className="account__form needs-validation"
                      noValidate
                    >
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="trk-btn trk-btn--border trk-btn--primary1 d-block mt-4"
                      >
                        Reset password
                      </button>
                    </form>

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
