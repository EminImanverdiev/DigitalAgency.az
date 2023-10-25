import React,{useEffect} from "react";
import "../AgencyPage/Agency.css";
import Navbar from "../Navbar/Navbar";
import RespNavbar from "../RespNavbar/RespNavbar";
import img3 from "../../../assets/images/logo-header.png";
import img2 from "../../../assets/images/agenright.png";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
function AgencyHeader() {
  useEffect(()=>{
    AOS.init()
},[])
  return (
    <section id="agencyheader" >
      <RespNavbar />
      <Navbar />
      <img className="head-pic" src={img2} alt="" />
      <img className="head-pic2" src={img3} alt="" />
      <div className="head-content" data-aos="fade-up">
        <h1>A Digital Agency</h1>
        <h6>& Solution.</h6>
        <p>To boost your business and sales with Roots</p>
        <Link className="link link-head" to="/agency/apply" >Muraciet et</Link>
      </div>
    </section>
  );
}
export default AgencyHeader;
