import React from 'react'
import '../../../components/agencyComponents/AgencyPage/Agency.css'
import AgencyHeader from '../../../components/agencyComponents/AgencyPage/AgencyHeader'
import AgencyAbout from '../../../components/agencyComponents/AgencyPage/AgencyAbout'
import AgencyService from '../../../components/agencyComponents/AgencyPage/AgencyService'
import AgencyOrganize from '../../../components/agencyComponents/AgencyPage/AgencyOrganize'
import AgencyGallery from '../../../components/agencyComponents/AgencyPage/AgencyGallery'
import AgencyTeam from '../../../components/agencyComponents/AgencyPage/AgencyTeam'
import AgencyEmail from '../../../components/agencyComponents/AgencyPage/AgencyEmail'
import AgencyContact from '../../../components/agencyComponents/AgencyPage/AgencyContact'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
import AgencySvg from '../../../components/agencyComponents/AgencyPage/AgencySvg'

export default function HomePage() {
  return (
    <section id='agency'>
      <AgencySvg/>
      <AgencyHeader/>
      <AgencyAbout/>
      <AgencyService/>
      <AgencyOrganize/>
      <AgencyGallery/>
      <AgencyTeam/>
      <AgencyEmail/>
      <AgencyContact/>
      <PageFooter/>
    </section>
  )
}
