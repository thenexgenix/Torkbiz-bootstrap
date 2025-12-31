import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Register | Torkbiz",
};

export default function SignUpPage() {
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
            <h2>Register</h2>

            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  Register
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

      {/* ================= Account Section ================= */}
      <section className="account padding-top padding-bottom">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-12">
                <div className="account__content account__content--style1">
                  {/* Header */}
                  <div className="account__header">
                    <h2>Create your account</h2>
                    <p>
                      Hey there! Ready to join the party? We just need a few
                      details from you to get started. Let&apos;s do this!
                    </p>
                  </div>

                  {/* Social signup */}
                  <div className="account__social">
                    <button type="button" className="account__social-btn">
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
                  <form className="account__form needs-validation" noValidate>
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <label htmlFor="first-name" className="form-label">
                          First name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="first-name"
                          placeholder="Ex. Jhon"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="last-name" className="form-label">
                          Last name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="last-name"
                          placeholder="Ex. Doe"
                        />
                      </div>

                      <div className="col-12">
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

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-pass"
                            placeholder="Password"
                            required
                          />
                          <button type="button" className="form-pass__toggle">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-cpass" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-cpass"
                            placeholder="Re-type password"
                            required
                          />
                          <button type="button" className="form-pass__toggle">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary1 d-block mt-4"
                    >
                      Sign Up
                    </button>
                  </form>

                  {/* Switch */}
                  <div className="account__switch">
                    <p>
                      Don&apos;t have an account yet?{" "}
                      <Link href="/signin">
                        <span>Login</span>
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
