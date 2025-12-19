import Image from "next/image";

export default function BlogDetailsTags() {
  return (
    <div className="blog-details__action" data-aos="fade-up" data-aos-duration="1000">
      <div className="blog-details__action-inner">

        <div className="blog-details__tag">
          <div className="tags">
            <ul>
              <li><h6>Tags</h6></li>
              <li><a href="#" className="active">Advices</a></li>
              <li><a href="#">business</a></li>
            </ul>
          </div>
        </div>

        <div className="blog-details__social">
          <ul className="social">
            {["facebook-f","instagram","linkedin-in","youtube","twitter"].map((icon, i) => (
              <li className="social__item" key={i}>
                <a className="social__link social__link--style1">
                  <i className={`fab fa-${icon}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
