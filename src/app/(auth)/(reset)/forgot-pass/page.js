import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Reset Password | Torkbiz",
};

export default function ResetPasswordPage() {
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
            <h2>Reset Password</h2>

            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Reset Password
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
                    <h2>Reset your password</h2>
                    <p>
                      Hey there! Forgot your password? No worries, just click
                      &quot;forgot password&quot; and follow the steps to recover it. Easy
                      peasy lemon squeezy!
                    </p>
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
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary1 d-block mt-4"
                    >
                      Reset password
                    </button>
                  </form>

                  {/* Switch */}
                  <div className="account__switch">
                    <p>
                      <Link href="/signin">
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
      </section>
    </>
  );
}
