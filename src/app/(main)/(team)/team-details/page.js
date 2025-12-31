import CTASection from '@/components/modules/home/common/CTASection'
import React from 'react'
import Header from './Header'
import TeamDetailsSection from './TeamDetailsSection'

export default function teamDetails() {
  return (
    <div>
      <Header/>
      <TeamDetailsSection/>


      <CTASection className="bg-color-3" />
    </div>
  )
}
