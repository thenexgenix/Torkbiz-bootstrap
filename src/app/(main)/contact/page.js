import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Torkbiz",
};

export default function ContactPage() {
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
            <h2>Contact Us</h2>

            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
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

      {/* ================= Contact Section ================= */}
      <div className="contact padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5">

              {/* Left Info */}
              <div className="col-md-5">
                <div
                  className="contact__info"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="contact__social">
                    <h3>
                      let’s <span>get in touch</span>
                      <br />
                      with us
                    </h3>

                    <ul className="social">
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li className="social__item d-sm-none d-xl-block">
                        <Link
                          href="#"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li className="social__item d-sm-none d-xl-block">
                        <Link
                          href="#"
                          className="social__link social__link--style1"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Details */}
                  <div className="contact__details">

                    <div className="contact__item">
                      <div className="contact__item-inner">
                        <div className="contact__item-thumb">
                          <span>
                            <Image
                              src="/images/contact/1.png"
                              alt="phone"
                              width={40}
                              height={40}
                            />
                          </span>
                        </div>
                        <div className="contact__item-content">
                          <p>0917749254</p>
                          <p>0983888611</p>
                        </div>
                      </div>
                    </div>

                    <div className="contact__item">
                      <div className="contact__item-inner">
                        <div className="contact__item-thumb">
                          <span>
                            <Image
                              src="/images/contact/2.png"
                              alt="email"
                              width={40}
                              height={40}
                            />
                          </span>
                        </div>
                        <div className="contact__item-content">
                          <p>torkbiz@gmail.com</p>
                          <p>hello@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="contact__item">
                      <div className="contact__item-inner">
                        <div className="contact__item-thumb">
                          <span>
                            <Image
                              src="/images/contact/3.png"
                              alt="location"
                              width={40}
                              height={40}
                            />
                          </span>
                        </div>
                        <div className="contact__item-content">
                          <p>88 Sheridan Street</p>
                          <p>534 Victoria Trail</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="col-md-7">
                <div className="contact__form">
                  <form data-aos="fade-left" data-aos-duration="1000">
                    <div className="row g-4">
                      <div className="col-12">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email here"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea
                          rows="5"
                          className="form-control"
                          placeholder="Enter Your Message"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary1 mt-4 d-block"
                    >
                      contact us now
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
