import React, { Component } from 'react'
import '../../../components/agencyComponents/ServicePage/Service.css'
import ServiceHeader from '../../../components/agencyComponents/ServicePage/ServiceHeader'
import ServiceTitle from '../../../components/agencyComponents/ServicePage/ServiceTitle'
import Footer from '../../../components/agencyComponents/Footer/PageFooter'
import ServiceFirstLeft from '../../../components/agencyComponents/ServicePage/ServiceFirstLeft'
import ServiceSecondLeft from '../../../components/agencyComponents/ServicePage/ServiceSecondLeft'
import ServiceFirstRight from '../../../components/agencyComponents/ServicePage/ServiceFirstRight'
import ServiceSecondRight from '../../../components/agencyComponents/ServicePage/ServiceSecondRight'
 class ServicePage extends Component {
  render() {
    return (
      <section id='service'>
        <ServiceHeader/>
        <ServiceTitle/>
        <ServiceFirstRight/>
        <ServiceFirstLeft/>
        <ServiceSecondRight/>
        <ServiceSecondLeft/>
        <Footer/>
      </section>
    )
  }
}
export default ServicePage