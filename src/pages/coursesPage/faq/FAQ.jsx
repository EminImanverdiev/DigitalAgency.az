import React from "react";
import "./style.css";
import Header from "../../../components/header/Header";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import Accordion from "./accordion/Accordion";
export default function FAQ() {
  return (
    <div className="faqSection">
      <div className="faqBanner">
        <Header />
        <div className="pageTitle">
          <h5>FAQ</h5>
          <p>Tez - tez verilən suallar</p>
        </div>
      </div>
      <div className="container">
        <Accordion />
      </div>
      <CourseFooter />
    </div>
  );
}
