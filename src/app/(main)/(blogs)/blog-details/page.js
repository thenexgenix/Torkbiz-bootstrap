import Image from "next/image";
import Link from "next/link";

import BlogDetailsCommentForm from "@/components/modules/blogs/blogDetails/BlogDetailsCommentForm";
import BlogDetailsComments from "@/components/modules/blogs/blogDetails/BlogDetailsComments";
import BlogDetailsTags from "@/components/modules/blogs/blogDetails/BlogDetailsTags";
import BlogSidebar from "@/components/modules/blogs/sidebar/BlogSidebar";

export const metadata = {
  title: "Blog Details | Torkbiz",
};

export default function BlogDetailsPage() {
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
            <h2>Blog details</h2>
            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="breadcrumb-item active">Blog details</li>
              </ol>
            </nav>
          </div>

          <div className="page-header__shape">
            {["1", "2", "3"].map((n) => (
              <span
                key={n}
                className={`page-header__shape-item page-header__shape-item--${n}`}
              >
                <Image
                  src={`/images/icon/page-header/${n}.png`}
                  alt="shape-icon"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Blog Details ================= */}
      <div className="blog-details padding-top padding-bottom bg-color-6">
        <div className="container">
          <div className="blog-details__wrapper">
            <div className="row g-5">
              {/* LEFT COLUMN */}
              <div className="col-lg-8">
                <div className="blog-details__item">
                  <div className="blog-details__item-inner">
                    {/* Thumbnail */}
                    <div className="blog-details__thumb">
                      <div
                        className="blog-details__thumb-inner"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        <Image
                          src="/images/blog/details/1.png"
                          alt="blog-image"
                          width={800}
                          height={450}
                          className="w-100 h-auto"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="blog-details__content">
                      <h3>boasting business efficiency</h3>

                      <div className="blog-details__meta">
                        <ul>
                          <li>
                            <Image
                              src="/images/blog/icon/1.png"
                              alt="user-icon"
                              width={16}
                              height={16}
                              style={{ width: "auto", height: "auto" }}
                            />
                            Mobarok Hossain
                          </li>
                          <li>
                            <Image
                              src="/images/blog/icon/2.png"
                              alt="date-icon"
                              width={16}
                              height={16}
                              style={{ width: "auto", height: "auto" }}
                            />
                            April 25, 2023
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/blog/icon/3.png"
                                alt="comment-icon"
                                width={16}
                                height={16}
                                style={{ width: "auto", height: "auto" }}
                              />
                              4 Comments
                            </a>
                          </li>
                        </ul>
                      </div>

                      <p className="mb-0">
                        Our efficiency is off the charts! We&apos;ve streamlined
                        our processes so smoothly, we could run circles around
                        the competition. Our team is firing on all cylinders and
                        our clients are reaping the benefits.
                      </p>
                    </div>

                    {/* Segment */}
                    <div
                      className="blog-details__segment"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="blog-details__segment-inner">
                        <div className="blog-details__segment-item">
                          <div className="row gy-4">
                            <div className="col-xl-6">
                              <div className="blog-details__segment-thumb">
                                <Image
                                  src="/images/blog/details/2.png"
                                  alt="blog-image"
                                  width={400}
                                  height={300}
                                  className="w-100 h-auto"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="blog-details__segment-content">
                                <h5>
                                  Short-term investment to
                                  <br /> the marker
                                </h5>
                                <p>
                                  Looking to make some quick cash in the market?
                                  Short-term investments might be just the
                                  ticket.
                                </p>
                                <p>
                                  They can be risky, but with a little research
                                  and some luck, you could see solid returns.
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="blog-details__segment-content">
                                <h5>
                                  long-term investment to
                                  <br /> higher return
                                </h5>
                                <p className="mb-0">
                                  Long-term investments reward patience. The
                                  returns will be worth it in the end.
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="blog-details__segment-thumb">
                                <Image
                                  src="/images/blog/details/3.png"
                                  alt="blog-image"
                                  width={400}
                                  height={300}
                                  className="w-100 h-auto"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tags + Social */}
                    <BlogDetailsTags />

                    {/* Comments */}
                    <BlogDetailsComments />

                    {/* Comment Form */}
                    <BlogDetailsCommentForm />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
