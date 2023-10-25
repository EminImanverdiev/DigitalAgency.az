import React from 'react'
import '../../../components/agencyComponents/ContactPage/Contact.css'
import ContactHeader from '../../../components/agencyComponents/ContactPage/ContactHeader'
import ContactContent from '../../../components/agencyComponents/ContactPage/ContactContent'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
 function Contact() {
  return (
    <section id='contact'>
        <ContactHeader/>
        <ContactContent/> 
        <PageFooter/>
    </section>
  )
}
export default Contact