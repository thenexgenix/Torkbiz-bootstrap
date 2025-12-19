export default function SidebarSearch() {
  return (
    <div className="col-12">
      <div className="sidebar__search" data-aos="fade-up" data-aos-duration="800">
        <h6 className="mb-10">Search Here</h6>
        <div className="sidebar__search-body">
          <form action="#">
            <div className="input">
              <input
                type="text"
                className="form-control"
                placeholder="Search articles"
              />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
