import React from 'react'
import LandingNavbar from '../components/LandingNavbar'
import LandingHero from '../components/LandingHero'
import LandingFooter from '../components/LandingFooter'
import LandingFeature from '../components/LandingFeature'

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar/>
      <LandingHero/>
      <LandingFeature/>
      <LandingFooter/>
    </div>
  )
}

export default LandingPage
