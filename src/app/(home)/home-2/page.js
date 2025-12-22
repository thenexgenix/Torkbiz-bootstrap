import AboutConsultancy from '@/components/modules/home/home-2/AboutConsultancy'
import BlogSection from '@/components/modules/home/home-2/BlogSection'
import FaqSection2 from '@/components/modules/home/home-2/FaqSection2'
import HeroSection from '@/components/modules/home/home-2/HeroSection'
import NewsletterSection from '@/components/modules/home/home-2/NewsletterSection'
import PricingSection2 from '@/components/modules/home/home-2/PricingSection2'
import ServiceSection2 from '@/components/modules/home/home-2/ServiceSection2'
import TeamSection2 from '@/components/modules/home/home-2/TeamSection2'
import TestimonialSection2 from '@/components/modules/home/home-2/TestimonialSection2'
import React from 'react'

export default function home2() {
  return (
    <div>
      <HeroSection />
      <AboutConsultancy />
      <ServiceSection2 />
      <PricingSection2 />
      <TeamSection2 />
      <TestimonialSection2 />
      <FaqSection2 />
      <BlogSection />
      <NewsletterSection />
    </div>
  )
}
