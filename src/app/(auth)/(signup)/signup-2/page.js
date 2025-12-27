import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Register | Torkbiz",
};

export default function SecondSignUpPage() {
  return (
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
                    src="/images/account/1.png"
                    alt="account image"
                    width={600}
                    height={600}
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-lg-6">
                <div className="account__content account__content--style2">
                  {/* TITLE */}
                  <div className="account__header">
                    <h2>Register</h2>
                    <p className="mb-0">
                      Join our club by filling out the form for event, news, and
                      promotion updates. Contact us with questions. Don&apos;t
                      miss out on the fun!
                    </p>
                  </div>

                  {/* SOCIAL */}
                  <div className="account__social">
                    <ul className="social">
                      {[
                        "facebook-f",
                        "instagram",
                        "linkedin-in",
                        "youtube",
                        "twitter",
                      ].map((icon, i) => (
                        <li className="social__item" key={i}>
                          <a className="social__link social__link--style1">
                            <i className={`fab fa-${icon}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DIVIDER */}
                  <div className="account__divider account__divider--style2">
                    <span>Or use you email to create account.</span>
                  </div>

                  {/* FORM */}
                  <form className="account__form needs-validation">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label">First name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Ex. Jhon"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label">Last name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Ex. Doe"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                          <button type="button" className="form-pass__toggle">
                            <i className="fa fa-eye" />
                          </button>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Re-type password"
                          />
                          <button type="button" className="form-pass__toggle">
                            <i className="fa fa-eye" />
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

                  {/* SWITCH */}
                  <div className="account__switch">
                    <p>
                      Don’t have an account yet?{" "}
                      <Link href="/signin-2">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
