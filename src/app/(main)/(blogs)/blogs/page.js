import Link from "next/link";
import Image from "next/image";
import blogs from "@/components/modules/blogs/blogData";
import BlogCard from "@/components/modules/blogs/BlogCard";

export const metadata = {
  title: "Blog Grid | Torkbiz",
};

export default function BlogsGridPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header bg-color-1">
        <div className="container">
          <div className="page-header__content" data-aos="fade-right">
            <h2>Blog - Grid</h2>

            <nav style={{ "--bs-breadcrumb-divider": "'/'" }}>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Blog - Grid</li>
              </ol>
            </nav>
          </div>

          <div className="page-header__shape">
            <span className="page-header__shape-item page-header__shape-item--1">
              <Image src="/images/icon/page-header/1.png" alt="" width={60} height={60} />
            </span>
            <span className="page-header__shape-item page-header__shape-item--2">
              <Image src="/images/icon/page-header/2.png" alt="" width={60} height={60} />
            </span>
            <span className="page-header__shape-item page-header__shape-item--3">
              <Image src="/images/icon/page-header/3.png" alt="" width={60} height={60} />
            </span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog padding-top padding-bottom bg-color-6">
        <div className="container">
          <div className="blog__wrapper">
            <div className="row g-4">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  aosDelay={800 + index * 200}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="paginations mt-5">
              <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                <li>
                  <Link href="#"><i className="fa-solid fa-angle-left me-2"></i> Prev</Link>
                </li>
                <li><Link href="#" className="active">1</Link></li>
                <li className="d-none d-sm-block"><Link href="#">2</Link></li>
                <li className="d-none d-sm-block"><Link href="#">3</Link></li>
                <li><span className="dot">...</span></li>
                <li><Link href="#">12</Link></li>
                <li>
                  <Link href="#">Next <i className="fa-solid fa-angle-right ms-2"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
