import Link from "next/link";
import Image from "next/image";

const posts = [
  ["Real Estate Investing", "Dec 22, 2023", "/images/blog/recent/1.png"],
  ["Technical analysis", "July 28, 2023", "/images/blog/recent/2.png"],
  ["Trading risk tolerance", "May 18, 2023", "/images/blog/recent/3.png"],
  ["Harmonic price pattern", "Feb 16, 2023", "/images/blog/recent/4.png"],
];

export default function SidebarRecentPost() {
  return (
    <div className="col-12">
      <div
        className="sidebar__recentpost"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="sidebar__head">
          <h6>Recent Post</h6>
        </div>

        <div className="sidebar__recentpost-body">
          <ul>
            {posts.map(([title, date, img], i) => (
              <li key={i}>
                <div className="sidebar__recentpost-item">
                  <div className="sidebar__recentpost-inner">
                    <div className="sidebar__recentpost-thumb">
                      <Link href="/blogs/details">
                        <Image
                          src={img}
                          alt={title}
                          width={80}
                          height={80}
                        />
                      </Link>
                    </div>

                    <div className="sidebar__recentpost-content">
                      <p>
                        <Link href="/blogs/details">{title}</Link>
                      </p>
                      <span>{date}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
