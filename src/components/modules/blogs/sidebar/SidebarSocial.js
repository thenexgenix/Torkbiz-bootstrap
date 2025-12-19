import Link from "next/link";

const icons = ["facebook-f", "instagram", "linkedin-in", "youtube", "twitter"];

export default function SidebarSocial() {
  return (
    <div className="col-12">
      <div className="sidebar__social" data-aos="fade-up" data-aos-duration="1200">
        <div className="sidebar__head">
          <h6>Social Links</h6>
        </div>
        <div className="sidebar__social-body">
          <div className="sidebar__social-content">
            <ul className="social mt-25">
              {icons.map((icon, i) => (
                <li className="social__item" key={i}>
                  <Link href="#" className="social__link social__link--style1">
                    <i className={`fab fa-${icon}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
