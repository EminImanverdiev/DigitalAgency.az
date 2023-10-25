import React, { Component } from 'react'
import '../../../components/agencyComponents/ProjectPage/Project.css'
import ProjectHeader from '../../../components/agencyComponents/ProjectPage/ProjectHeader'
import ProjectTitle from '../../../components/agencyComponents/ProjectPage/ProjectTitle'
import Footer from '../../../components/agencyComponents/Footer/PageFooter'
import ProjectFirstRight from '../../../components/agencyComponents/ProjectPage/ProjectFirstRight'
 class ProjectPage extends Component {
  render() {
    return (
      <section id='project'>
        <ProjectHeader/>
         <ProjectTitle/>
        <ProjectFirstRight/>
        <Footer/>
      </section>
    )
  }
}
export default ProjectPage