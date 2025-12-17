export default function Hero() {
  return (
    <section
      className="banner banner--style1 bg--cover bg-color-3"
      style={{ backgroundImage: "url(/images/bg/4.png)" }}
    >
      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            <div className="col-lg-6 col-md-6">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1 className="banner__content-heading">
                  we help to grow your business
                </h1>
                <p className="banner__content-moto">
                  Anyone can invest money to different currency to increase
                  their earnings by the help of tradingo through online.
                </p>
                <div className="banner__content-btngroup">
                  <a
                    href="/signin.html"
                    className="trk-btn trk-btn--border trk-btn--primary1 trk-btn--arrow"
                  >
                    Get Started{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=uJSgaPIvgKk"
                    className="playbtn"
                    data-fslightbox
                  >
                    <span className="playbtn__thumb">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="playbtn__content">Watch Video</span>
                  </a>
                </div>
                <div className="banner__content-social">
                  <p>Follow Us</p>
                  <ul className="social">
                    <li className="social__item">
                      <a
                        href="#"
                        className="social__link social__link--style1 active"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        href="/signin.html"
                        className="social__link social__link--style1"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="banner__thumb">
                <img src="/images/bg/5.png" alt="banner-thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`banner__shape-item banner__shape-item--${i}`}
          >
            <img
              src={`/images/banner/shape/${i}.png`}
              alt="shape icon"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
