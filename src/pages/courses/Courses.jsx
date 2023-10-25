import React from "react";
import Slider from "react-slick";
import "./style.css";
import Header from "../../components/header/Header";
import OurCourses from "../../components/ourCourses/OurCourses";
import CourseSlider from "../../components/courseSlider/CourseSlider";
import CourseFooter from "../../components/courseFooter/CourseFooter";
import { useCoursesContext } from "../../contexts/coursesContext/CoursesContext";
export default function Courses() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { category } = useCoursesContext();
  return (
    <div className="coursesSection">
      <Header />
      <div className="sliderWrapper">
        <Slider {...settings} className="slider">
          {category.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
            </div>
          ))}
        </Slider>
      </div>

      <OurCourses />
      <div className="courseSliderBox">
        <CourseSlider />
      </div>
      <CourseFooter />
    </div>
  );
}
