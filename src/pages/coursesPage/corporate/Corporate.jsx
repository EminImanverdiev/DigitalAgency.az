import React from "react";
import Header from "../../../components/header/Header";
import CorporateBanner from "../../../components/corporate/corporateBanner/CorporateBanner";
import BlogFeatures from "../../../components/blog/blogFeatures/BlogFeatures";
import CourseSlider from "../../../components/courseSlider/CourseSlider";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import "./style.css";

export default function Corporate() {
  return (
    <div className="corporateSection">
      <Header />
      <CorporateBanner />
      <BlogFeatures />
      <CourseSlider />
      <CourseFooter />
    </div>
  );
}
