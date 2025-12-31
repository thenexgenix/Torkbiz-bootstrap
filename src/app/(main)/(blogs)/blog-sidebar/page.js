import Image from "next/image";
import BlogCard from "@/components/modules/blogs/BlogCard";
import blogs from "@/components/modules/blogs/blogData";
import BlogSidebar from "@/components/modules/blogs/sidebar/BlogSidebar";
import Link from "next/link";

export const metadata = {
  title: "Blog - Side Bar | Torkbiz",
};

export default function BlogSidebarPage() {
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
            <h2>Blog - side bar</h2>
            <nav
              style={{ "--bs-breadcrumb-divider": "'/'" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Blog - side bar</li>
              </ol>
            </nav>
          </div>

          {/* Page Header Shapes */}
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

      {/* ================= Blog Section ================= */}
      <div className="blog padding-top padding-bottom bg-color-6">
        <div className="container">
          <div className="blog__wrapper">
            <div className="row g-5">
              {/* LEFT CONTENT */}
              <div className="col-lg-8">
                <div className="row g-4">
                  {blogs.slice(0, 6).map((blog, index) => (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                      columnClass="col-sm-6"
                      aosDelay={index % 2 === 0 ? 1000 : 1200}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div
                  className="paginations"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                    <li>
                      <Link href="#">
                        <i className="fa-solid fa-angle-left me-2"></i> Prev
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="active">
                        1
                      </Link>
                    </li>
                    <li className="d-none d-sm-block">
                      <Link href="#">2</Link>
                    </li>
                    <li className="d-none d-sm-block">
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#" className="dot">
                        ...
                      </Link>
                    </li>
                    <li>
                      <Link href="#">12</Link>
                    </li>
                    <li>
                      <Link href="#" className="active">
                        Next <i className="fa-solid fa-angle-right ms-2"></i>
                      </Link>
                    </li>
                  </ul>
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
