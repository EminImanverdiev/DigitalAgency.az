import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Header from "../../../components/header/Header";
import Teachers from "../../../components/teachers/Teachers";
import CourseSlider from "../../../components/courseSlider/CourseSlider";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import Aos from "aos";
import "aos/dist/aos.css";
import { useCoursesContext } from "../../../contexts/coursesContext/CoursesContext";

export default function CourseDetails() {
  const { courses } = useCoursesContext();

  const { id } = useParams();

  const selectedCourseIndex = Number(id);

  const selectedCourseItem = courses[selectedCourseIndex];

  const imgUrl = `http://localhost:8090/image/download/${selectedCourseItem?.imageData}`;

  // AOS Animate

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="courseDetailsSection">
      <Header />
      <div className="container">
        <div className="courseDetail">
          <div className="courseInfo" data-aos="zoom-in">
            <h2>{selectedCourseItem?.name}</h2>
            <p>{selectedCourseItem?.content}</p>
            <Link to="/" className="applyBtn">
              Müraciət et
            </Link>
          </div>
          <div className="courseImgWrapper" data-aos="zoom-in">
            <img src={imgUrl} alt="course" />
          </div>
        </div>
      </div>
      <Teachers />
      <div className="sliderWrapper">
        <CourseSlider />
      </div>
      <CourseFooter />
    </div>
  );
}
  