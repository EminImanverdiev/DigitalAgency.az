import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import levelup from '../../../assets/images/levelup.png'
export default function AboutContent() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section id='aboutcontent'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6" data-aos="fade-right">
            <img src={levelup} alt="" />
          </div>
          <div className="col-xxl-6" data-aos="fade-left">
            <h1>Level up your Business with Roots</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
