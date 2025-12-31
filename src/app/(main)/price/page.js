import CTASection from '@/components/modules/home/common/CTASection'
import PricingSection from '@/components/modules/home/common/PricingSection'
import TestimonialSection from '@/components/modules/home/common/TestimonialSection'
import React from 'react'
import Header from './Header'

export default function Price() {
  return (
    <div>
      
       <Header/>
       <PricingSection />
       <TestimonialSection />
       <CTASection/>
    </div>
  )
}
