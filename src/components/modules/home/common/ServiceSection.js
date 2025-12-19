"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSection() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const htmlTheme = document.documentElement.getAttribute("data-bs-theme");
    setTheme(htmlTheme || "light");
  }, []);

  if (!mounted) return null;
  const getImageSrc = (num) =>
    theme === "dark"
      ? `/images/service/${num}-dark.png`
      : `/images/service/${num}.png`;

  return (
    <section className="service padding-top padding-bottom bg-color-2">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-10">
          <span>services </span>We offer
        </h2>
        <p>
          We offer the best services around - from installations to repairs,
          maintenance, and more!
        </p>
      </div>
      <div className="container">
        <div className="service__wrapper">
          <div className="row g-4 align-items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="col-sm-6 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-duration={800 + (num - 1) * 200}
              >
                <div className="service__item">
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <Image
                          className="dark"
                          src={getImageSrc(num)}
                          alt="service-icon"
                          width={60}
                          height={60}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <Link
                          className="stretched-link"
                          href="/service-details"
                        >
                          {
                            [
                              "Strategy Consulting",
                              "Financial Advisory",
                              "Management",
                              "Supply Optimization",
                              "HR consulting",
                              "Marketing consulting",
                            ][num - 1]
                          }
                        </Link>
                      </h5>
                      <p className="mb-0">
                        {
                          [
                            "A social assistant that's flexible can accommodate your schedule and needs, making life easier.",
                            "Modules transform smart trading by automating processes and improving decision-making.",
                            "There, it's me, your friendly neighborhood reporter's news analyst processes and improving",
                            "Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy to use!",
                            "Hey guys, just a quick update on exchange orders. There have been some changes currency!",
                            "Hey! Just wanted to let you know that the price notification module processes is now live!",
                          ][num - 1]
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service__shape">
        <span className="service__shape-item">
          <Image
            src="/images/about/2.png"
            alt="shpae-icon"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
      </div>
    </section>
  );
}
