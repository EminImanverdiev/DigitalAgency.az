import React, { useEffect } from 'react'
import AboutHeader from '../../../components/agencyComponents/AboutUsPage/AboutHeader'
import '../../../components/agencyComponents/AboutUsPage/About.css'
import AboutContent from '../../../components/agencyComponents/AboutUsPage/AboutContent'
import AboutMission from '../../../components/agencyComponents/AboutUsPage/AboutMission'
import AboutCounter from '../../../components/agencyComponents/AboutUsPage/AboutCounter'
import AboutInternship from '../../../components/agencyComponents/AboutUsPage/AboutInternship'
import AboutLocation from '../../../components/agencyComponents/AboutUsPage/AboutLocation'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
export default function About() {
  return (
    <section id='about'>
      <AboutHeader/>
      <AboutContent/>
      <AboutMission/>
      <AboutCounter/>
      <AboutInternship/>    
      <AboutLocation/>
      <PageFooter/>
    </section>
  )
}