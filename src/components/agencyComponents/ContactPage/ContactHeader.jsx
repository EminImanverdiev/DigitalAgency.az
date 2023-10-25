import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "../Navbar/Navbar";
import RespNavbar from "../RespNavbar/RespNavbar";
function ContactHeader() {
  useEffect(()=>{
    AOS.init()
},[])
  return (
    <section id="contactheader">
      <RespNavbar />
      <Navbar />
      <div className="head-box" data-aos="fade-up">
        <h1>Contact Us</h1>
        <p>It is a long established fact that a reader be distracted.</p>
      </div>
    </section>
  );
}
export default ContactHeader;
