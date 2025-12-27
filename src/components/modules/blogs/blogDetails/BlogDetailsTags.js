import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsTags() {
  return (
    <div
      className="blog-details__action"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="blog-details__action-inner">
        <div className="blog-details__tag">
          <div className="tags">
            <ul>
              <li>
                <h6>Tags</h6>
              </li>
              <li>
                <Link href="#" className="active">
                  Advices
                </Link>
              </li>
              <li>
                <Link href="#">business</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="blog-details__social">
          <ul className="social">
            {[
              "facebook-f",
              "instagram",
              "linkedin-in",
              "youtube",
              "twitter",
            ].map((icon, i) => (
              <li className="social__item" key={i}>
                <Link href="#" className="social__link social__link--style1">
                  <i className={`fab fa-${icon}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
