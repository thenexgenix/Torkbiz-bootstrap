import About from '@/components/modules/home/common/About'
import CTASection from '@/components/modules/home/common/CTASection'
import TeamSection from '@/components/modules/home/common/TeamSection'
import React from 'react'
import Header from './Header'
import StorySection from './StorySection'

export default function AboutUs() {
  return (
    <div>
      <Header/>
      <StorySection/>
      <About/>
      <TeamSection/>
      <CTASection/>
    </div>
  )
}
