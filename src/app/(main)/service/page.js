"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import TestimonialSection2 from "@/components/modules/home/home-2/TestimonialSection2";
import CTASection from "@/components/modules/home/common/CTASection";
import ServiceSection from "@/components/modules/home/common/ServiceSection";

export default function Service() {
  const pathname = usePathname();
  const isServicePage = pathname === "/service";

  return (
    <div>
      <Header />
      <ServiceSection />
      <TestimonialSection2 className={isServicePage ? "bg-color-6" : ""} />
      <CTASection className={isServicePage ? "bg-color-2" : ""} />
    </div>
  );
}
