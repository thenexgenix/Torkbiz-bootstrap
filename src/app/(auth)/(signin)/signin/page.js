import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Login | Torkbiz",
};

export default function SignInPage() {
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
            <h2>Login</h2>

            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login
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
              />
            </span>
            <span className="page-header__shape-item page-header__shape-item--2">
              <Image
                src="/images/icon/page-header/2.png"
                alt="shape"
                width={60}
                height={60}
              />
            </span>
            <span className="page-header__shape-item page-header__shape-item--3">
              <Image
                src="/images/icon/page-header/3.png"
                alt="shape"
                width={60}
                height={60}
              />
            </span>
          </div>
        </div>
      </section>

      {/* ================= Account Section ================= */}
      <section className="account padding-top padding-bottom">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content account__content--style1">
                  {/* Header */}
                  <div className="account__header">
                    <h2>Welcome back!</h2>
                    <p>
                      Hey there! Ready to log in? Just enter your username and
                      password below and you&apos;ll be back in action in no
                      time. Let&apos;s go!
                    </p>
                  </div>

                  {/* Social Login */}
                  <div className="account__social">
                    <button
                      type="button"
                      className="account__social-btn"
                    >
                      <span>
                        <Image
                          src="/images/others/google.svg"
                          alt="google icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      Sign in with google
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div>

                  {/* Form */}
                  <form
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <label
                          htmlFor="account-email"
                          className="form-label"
                        >
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

                      <div className="col-12">
                        <div className="form-pass">
                          <label
                            htmlFor="account-pass"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-pass"
                            placeholder="Password"
                            required
                          />

                          <button
                            type="button"
                            id="btnToggle"
                            className="form-pass__toggle"
                          >
                            <i id="eyeIcon" className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remember / Forgot */}
                    <div className="account__check">
                      <div className="account__check-remember">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="terms-check"
                        />
                        <label
                          htmlFor="terms-check"
                          className="form-check-label"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="account__check-forgot">
                        <Link href="/forgot-pass">Forgot Password?</Link>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary1 d-block mt-4"
                    >
                      Sign in
                    </button>
                  </form>

                  {/* Switch */}
                  <div className="account__switch">
                    <p>
                      Don&apos;t have an account?{" "}
                      <Link href="/signup">
                        <span>Sign up</span>
                      </Link>
                    </p>
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
