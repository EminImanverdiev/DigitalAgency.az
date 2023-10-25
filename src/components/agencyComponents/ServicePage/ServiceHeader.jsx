import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../../components/agencyComponents/Navbar/Navbar'
import RespNavbar from '../../../components/agencyComponents/RespNavbar/RespNavbar';
function ServiceHeader() {
     useEffect(()=>{
          AOS.init()
      },[])
  return (
    <section id='serviceheader'>
        <RespNavbar/>
        <Navbar/>
        <div className="container-fluid head-con">
            <div className="row">
                 <div className="col-xl-5" data-aos="fade-up">
                      <h1>Services</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eligendi adipisci doloremque </p>
                 </div>
                 <div className="col-xl-7">
                      <div className="ser-head-pic"></div>
                      <div className="sec-head-pic"></div>
                 </div>
            </div>
        </div>
    </section>
  )
}
export default  ServiceHeader;