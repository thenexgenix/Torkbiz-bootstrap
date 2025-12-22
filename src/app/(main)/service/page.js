import React from 'react'
import Header from './Header'
import TestimonialSection2 from '@/components/modules/home/home-2/TestimonialSection2'
import CTASection from '@/components/modules/home/common/CTASection'
import ServiceSection from '@/components/modules/home/common/ServiceSection'


export default function service() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <TestimonialSection2 />
      <CTASection />
      
    </div>
  )
}
