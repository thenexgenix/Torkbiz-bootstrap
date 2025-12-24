import Image from "next/image";
import Hero from "@/components/modules/home/home-1/Hero";
import BrandName from "@/components/modules/home/home-1/BrandName";
import About from "@/components/modules/home/common/About";
import FeatureSection from "@/components/modules/home/home-1/FeatureSection";
import ServiceSection from "@/components/modules/home/common/ServiceSection";
import PricingSection from "@/components/modules/home/common/PricingSection";
import TeamSection from "@/components/modules/home/common/TeamSection";
import BlogSection from "@/components/modules/home/home-1/BlogSection";
import TestimonialSection from "@/components/modules/home/common/TestimonialSection";
import FAQSection from "@/components/modules/home/common/FAQSection";
import CTASection from "@/components/modules/home/common/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandName />
      <About />
      <FeatureSection />
      <ServiceSection />
      <PricingSection />
      <TeamSection />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
