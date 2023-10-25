import React from 'react'
import Navbar from '../../../components/agencyComponents/Navbar/Navbar'
import RespNavbar from '../../../components/agencyComponents/RespNavbar/RespNavbar';
import '../../../components/agencyComponents/InternPage/Intern.css'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
export default function InternPage() {
  return (
    <section id='intern'>
      <RespNavbar />
      <Navbar />
      <div className="inner-intern">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-md-6" style={{ backgroundImage: `url("https://www.hult.edu/blog/media/uploads/2018/07/HNews-Internship.png")` }}></div>
            <div className="col-xxl-6 col-md-6">
              <div className="inp-box">
                <form action="/action_page.php">
                  <label for="fname">Name</label><br />
                  <input placeholder='Emin' type="text" id="fname" /><br />
                  <label  for="email">Email</label><br />
                  <input placeholder='imanverd1ev@gmail.com' type="email" id="email" /><br />
                  <label for="phone">Phone</label><br />
                  <input placeholder='12345678' type="phone" id="phone" /><br />
                  <div className='sub-box'>
                  <input className='button' type="submit" value="Email" />
                  <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter/>
    </section>
  )
}
