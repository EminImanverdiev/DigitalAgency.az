import React from 'react'
import Navbar from '../Navbar/Navbar'
import RespNavbar from '../RespNavbar/RespNavbar';
import Footer from '../PagesFooter/PageFooter'

function ProjectItem() {
  return (
    <section id='serviceitem'>
        <RespNavbar/>
        <Navbar/>
        <ItemContent/>
       <Footer/>
    </section>
  )
}
export default ProjectItem