import Link from "next/link";

export default function SidebarCategories() {
  return (
    <div className="col-12">
      <div className="sidebar__categorie" data-aos="fade-up" data-aos-duration="900">
        <div className="sidebar__head">
          <h6>Categories</h6>
        </div>
        <div className="sidebar__categorie-body">
          <div className="sidebar__categorie-content">
            <ul>
              <li className="active">
                <Link href="#">Large-cap stocks.</Link>
                <span>2</span>
              </li>
              <li><Link href="#">Value stocks</Link><span>4</span></li>
              <li><Link href="#">IPO stocks</Link><span>3</span></li>
              <li><Link href="#">Dividend stocks</Link><span>5</span></li>
              <li><Link href="#">Non-dividend stocks</Link><span>1</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
