import Link from "next/link";

const tags = [
  "Analysis",
  "Research",
  "Mentoring",
  "Strategy",
  "Planning",
  "Business",
  "Leadership",
  "Management",
];

export default function SidebarTags() {
  return (
    <div className="col-12">
      <div className="sidebar__tags" data-aos="fade-up" data-aos-duration="1100">
        <div className="sidebar__head">
          <h6>Popular Tag</h6>
        </div>
        <div className="sidebar__tags-body">
          <div className="tags">
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>
                  <Link href="#" className={i === 0 ? "active" : ""}>
                    {tag}
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
