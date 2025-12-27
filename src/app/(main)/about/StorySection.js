import React from "react";
import Link from "next/link";
import Image from "next/image";

const StorySection = () => {
  return (
    <div className="story padding-top bg-color-3">
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <div className="story__wrapper">
          <div className="story__thumb">
            <div className="story__thumb-inner">
              <Image
                src="/images/about/4.png"
                alt="story-image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="story__thumb-playbtn">
                <Link
                  href="https://www.youtube.com/watch?v=uJSgaPIvgKk&ab_channel=FreeTemplates"
                  data-fslightbox
                >
                  <i className="fa-solid fa-circle-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
