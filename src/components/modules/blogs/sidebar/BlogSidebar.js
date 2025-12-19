import SidebarSearch from "./SidebarSearch";
import SidebarCategories from "./SidebarCategories";
import SidebarRecentPost from "./SidebarRecentPost";
import SidebarTags from "./SidebarTags";
import SidebarSocial from "./SidebarSocial";

export default function BlogSidebar() {
  return (
    <div className="col-lg-4 col-md-8 col-12">
      <div className="sidebar">
        <div className="row g-4">
          <SidebarSearch />
          <SidebarCategories />
          <SidebarRecentPost />
          <SidebarTags />
          <SidebarSocial />
        </div>
      </div>
    </div>
  );
}
