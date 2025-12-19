import About from '@/components/modules/home/common/About';
import CTASection from '@/components/modules/home/common/CTASection';
import FAQSection from '@/components/modules/home/common/FAQSection';
import PricingSection from '@/components/modules/home/common/PricingSection';
import ServiceSection from '@/components/modules/home/common/ServiceSection';
import TeamSection from '@/components/modules/home/common/TeamSection';
import TestimonialSection from '@/components/modules/home/common/TestimonialSection';
import BlogSection from '@/components/modules/home/home-1/BlogSection';
import BrandName from '@/components/modules/home/home-1/BrandName'
import FeatureSection from '@/components/modules/home/home-1/FeatureSection';
import Hero from '@/components/modules/home/home-1/Hero'
import React from 'react'

export default function Home1() {
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
