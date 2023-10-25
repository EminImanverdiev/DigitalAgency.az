import React from 'react'
import bg from '../../../assets/images/bg.png'
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { useAgencyContext } from "../../../contexts/agencyContext/AgencyContext";

function ContactContent() {
  const { contact } = useAgencyContext();
  return (
    <section id='contact-content'>
      <img src={bg} alt="" />
      <div className="contact-container">
        {
          contact?.map((info, index) => (
            <>
            <div className="container-left" key={index}>
              <h6>We would Love To Hear From You</h6>
              <p> Welcome to Agency DigitalHands, where we take your cravings to a
                whole new level! Our mouthwatering burgers are made from 100% beef
                and are served on freshly baked buns.</p>
              <div className="inf-box"> <HiLocationMarker className="icon icon-con" /> <span>{info.address}</span> </div>
              <div className="inf-box"><AiOutlineMail className='icon-con' /> <span>{info.email}</span></div>
              <div className="inf-box"><BsWhatsapp className='icon-con' /> <span>+994 12 345 67 89</span></div>
              <div className="inf-box"><FaPhone className='icon-con' /> <span>{info.phone}</span></div>
            </div>
             <div className="container-right">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3449478212647!2d49.85387287657486!3d40.37904685793114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d065b0441c7%3A0x5baa985ed4e4d63e!2s28th%20May%2C%20Baku!5e0!3m2!1sen!2saz!4v1696587294208!5m2!1sen!2saz" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
           </>
          ))
        }
       
      </div>
    </section>
  )
}
export default ContactContent