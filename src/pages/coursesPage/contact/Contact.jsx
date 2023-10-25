import React from "react";
import Iframe from "react-iframe";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import "./style.css";
import Header from "../../../components/header/Header";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import { useCoursesContext } from "../../../contexts/coursesContext/CoursesContext";

export default function Contact() {
  const { contactInfo } = useCoursesContext();
  return (
    <div className="contactWrapper">
      <div className="contactSection">
        <Header />
        {/* <div className="container"> */}
        <div className="contacTitle">
          <div className="container">
            <h5>Əlaqə</h5>
            <p>
              Welcome to Agency DigitalHands, where we take your cravings to a
              whole new level! Our mouthwatering burgers are made from 100% beef
              and are served on freshly baked buns.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container">
        <div className="contactFlex">
          {contactInfo.map((info, index) => (
            <div className="contactInfo" key={index}>
              <div className="contactItem">
                <HiLocationMarker className="icon" />
                <span>{info.address}</span>
              </div>
              <div className="contactItem">
                <AiOutlineMail className="icon" />
                <span>{info.email}</span>
              </div>
              <div className="contactItem">
                <BsWhatsapp className="icon" />
                <span>+994 12 345 67 89</span>
              </div>
              <div className="contactItem">
                <FaPhone className="icon" />
                <span>{info.phone}</span>
              </div>
            </div>
          ))}
          <div className="iframeWrapper">
            <Iframe
              url="https://maps.google.com/maps?q=Ziya%20B%C3%BCnyadov%20pr,%201965.%20%C3%87inar%20Park%20Biznes%20M%C9%99rk%C9%99zi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              id="gmap_canvas"
              className="mapouter"
              display="block"
              position="relative"
            />
          </div>
        </div>
      </div>
      <CourseFooter />
    </div>
  );
}
