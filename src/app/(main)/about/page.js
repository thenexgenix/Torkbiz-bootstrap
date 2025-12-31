import CTASection from '@/components/modules/home/common/CTASection'
import TeamSection from '@/components/modules/home/common/TeamSection'
import React from 'react'
import Header from './Header'
import StorySection from './StorySection'
import About from '@/components/modules/home/common/About'

export default function AboutUs() {
  return (
    <div>
      <Header />
      <StorySection />
      <About className="bg-color-3" />
      <TeamSection />
      <CTASection className="bg-color-3" />
    </div>
  );
}
