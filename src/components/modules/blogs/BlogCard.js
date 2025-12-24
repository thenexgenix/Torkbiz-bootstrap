import Link from "next/link";
import Image from "next/image";

export default function BlogCard({
  blog,
  aosDelay = 800,
  columnClass = "col-sm-6 col-lg-4", // default for grid page
}) {
  return (
    <div
      className={columnClass}
      data-aos="fade-up"
      data-aos-duration={aosDelay}
    >
      <div className="blog__item">
        <div className="blog__item-inner">
          <div className="blog__thumb">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={260}
              className="w-100"
              style={{ height: "auto" }} // MATCH HTML image behavior
            />
          </div>

          <div className="blog__content">
            <div className="blog__meta">
              <span className={`blog__meta-tag ${blog.tagStyle}`}>
                {blog.tag}
              </span>
            </div>

            <h5 className="10">
              <Link href={`/blogs/${blog.slug}`}>
                {blog.title}
              </Link>
            </h5>

            <p className="mb-15">{blog.excerpt}</p>

            <div className="blog__writer">
              <div className="blog__writer-thumb">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  width={40}
                  height={40}
                />
              </div>
              <div className="blog__writer-designation">
                <p className="mb-0">{blog.author}</p>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
