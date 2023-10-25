import React, { Component } from 'react'
import '../../../components/agencyComponents/ServicePage/Service.css'
import ServiceHeader from '../../../components/agencyComponents/ServicePage/ServiceHeader'
import ServiceTitle from '../../../components/agencyComponents/ServicePage/ServiceTitle'
import Footer from '../../../components/agencyComponents/Footer/PageFooter'
import ServiceFirstRight from '../../../components/agencyComponents/ServicePage/ServiceFirstRight'
 class ServicePage extends Component {
  
  render() {
    return (
      <section id='service'>
        <ServiceHeader/>
        <ServiceTitle/>
        <ServiceFirstRight/>
        <Footer/>
      </section>
    )
  }
}
export default ServicePage