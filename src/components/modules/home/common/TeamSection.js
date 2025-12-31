"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TeamSection() {
  const pathname = usePathname();
  const isTeamPage = pathname === "/team-1";

  const teamMembers = [
    {
      name: "Dianne Russell",
      role: "Business Consultant",
      image: "/images/team/1.png",
    },
    {
      name: "Theresa Webb",
      role: "Strategic Advisor",
      image: "/images/team/2.png",
    },
    {
      name: "Courtney Henry",
      role: "Management Consultant",
      image: "/images/team/3.png",
    },
    {
      name: "Albert Flores",
      role: "Development Specialist",
      image: "/images/team/4.png",
    },
    {
      name: "Darrell Steward",
      role: "Growth Strategist",
      image: "/images/team/5.png",
    },
    {
      name: "Wade Warren",
      role: "Marketing Consultant",
      image: "/images/team/6.png",
    },
    {
      name: "Cody Fisher",
      role: "HR Consultant",
      image: "/images/team/7.png",
    },
    {
      name: "Bessie Cooper",
      role: "Financial Advisor",
      image: "/images/team/8.png",
    },
  ];
  const displayedMembers = isTeamPage
    ? [...teamMembers, ...teamMembers.slice(0, 4)]
    : teamMembers;

  return (
    <section className="team padding-top padding-bottom bg-color-2">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-10">
          Meet our <span>advisers</span>
        </h2>
        <p>
          Hey everyone, meet our amazing advisers! They're here to help and
          guide us through anything.
        </p>
      </div>
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">
            {displayedMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div
                  className="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration={800 + (index % 4) * 100}
                >
                  <div className="team__item-inner team__item-inner--shape">
                    <div className="team__item-thumb team__item-thumb--style1">
                      <Image
                        src={member.image}
                        alt="Team Image"
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="team__item-content team__item-content--style1">
                      <div className="team__item-author team__item-author--style1">
                        <div className="team__item-authorinfo">
                          <h6 className="mb-1">
                            <Link
                              href="/team-details"
                              className="stretched-link"
                            >
                              {member.name}
                            </Link>
                          </h6>
                          <p className="mb-0">{member.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="team__item-shape">
                      <span className="team__item-shape1">
                        <Image
                          src="/images/team/icon/1.png"
                          alt="shape-icon"
                          width={45}
                          height={45}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </span>
                      <span className="team__item-shape2">
                        <Image
                          src="/images/team/icon/2.png"
                          alt="shape-icon"
                          width={45}
                          height={45}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </span>
                      <span className="team__item-shape3">
                        <Image
                          src="/images/team/icon/3.png"
                          alt="shape-icon"
                          width={45}
                          height={45}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isTeamPage ? (
            <div
              className="paginations"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                <li>
                  <Link href="#">
                    <i className="fa-solid fa-angle-left me-2"></i> Prev
                  </Link>
                </li>
                <li>
                  <Link href="#" className="active">
                    1
                  </Link>
                </li>
                <li className="d-none d-sm-block">
                  <Link href="#">2</Link>
                </li>
                <li className="d-none d-sm-block">
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#" className="dot">
                    ...
                  </Link>
                </li>
                <li>
                  <Link href="#">12</Link>
                </li>
                <li>
                  <Link href="#" className="active">
                    Next <i className="fa-solid fa-angle-right ms-2"></i>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="text-center">
              <Link
                href="/team-1"
                className="trk-btn trk-btn--border trk-btn--primary1 mt-25"
              >
                View more{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
