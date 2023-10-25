import React from "react";
import "./style.css";
import Header from "../../../components/header/Header";
import Banner from "../../../components/home_courses/banner/Banner";
import CoursesSlider from "../../../components/home_courses/coursesSlider/CoursesSlider";
import JoinUs from "../../../components/home_courses/joinUs/JoinUs";
import CourseSlider from "../../../components/courseSlider/CourseSlider";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import CourseVideo from "../../../components/home_courses/video/CourseVideo";
// import CourseBgAnimation from "../../../components/courseBgAnimation/CourseBgAnimation";
export default function Home_Courses() {
  return (
    <div className="home_Courses">
      {/* <CourseBgAnimation /> */}
      <Header />
      <Banner />
      <CoursesSlider />
      <JoinUs />
      <CourseSlider />
      <CourseVideo />
      <CourseFooter />
    </div>
  );
}
