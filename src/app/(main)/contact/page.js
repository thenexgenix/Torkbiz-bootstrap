import Link from "next/link";
import Image from "next/image";

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
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </nav>
          </div>

          <div className="page-header__shape">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`page-header__shape-item page-header__shape-item--${n}`}
              >
                <Image
                  src={`/images/icon/page-header/${n}.png`}
                  alt="shape"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            ))}
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
                        <Link href="#" className="social__link social__link--style1">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link href="#" className="social__link social__link--style1">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link href="#" className="social__link social__link--style1">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li className="social__item d-sm-none d-xl-block">
                        <Link href="#" className="social__link social__link--style1">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li className="social__item d-sm-none d-xl-block">
                        <Link href="#" className="social__link social__link--style1">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="contact__details">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="contact__item"
                        data-aos="fade-right"
                        data-aos-duration={900 + n * 100}
                      >
                        <div className="contact__item-inner">
                          <div className="contact__item-thumb">
                            <span>
                              <Image
                                src={`/images/contact/${n}.png`}
                                alt="contact"
                                width={40}
                                height={40}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </span>
                          </div>
                          <div className="contact__item-content">
                            {n === 1 && (
                              <>
                                <p>0917749254</p>
                                <p>0983888611</p>
                              </>
                            )}
                            {n === 2 && (
                              <>
                                <p>torkbiz@gmail.com</p>
                                <p>hello@gmail.com</p>
                              </>
                            )}
                            {n === 3 && (
                              <>
                                <p>88 Sheridan Street</p>
                                <p>534 Victoria Trail</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
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
                        <input className="form-control" placeholder="Full Name" />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input className="form-control" placeholder="Email here" />
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
