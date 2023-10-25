import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../../pages/courses/courseDetails/CourseDetails";
import { useCoursesContext } from "../../contexts/coursesContext/CoursesContext";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function OurCourses() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  const navigate = useNavigate();

  const { courses } = useCoursesContext();

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
    navigate(`/courses/${index}`);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="ourCourses">
      {courses.map((course, index) => (
        <div className="courseItemWrapper" key={index}>
          <div className="container">
            <div className="courseItem">
              <div className="imgWrapper" data-aos="fade-right">
                <img
                  src={`http://localhost:8090/image/download/${course?.imageData}`}
                  alt="course"
                />
              </div>
              <div className="infoWrapper" data-aos="fade-left">
                <h4>{course.name}</h4>
                <p>{course.content}</p>
                <a onClick={() => handleCourseClick(index)}>Müraciət et</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="courseSliderWrapper">
        {selectedCourseIndex && <CourseDetails course={selectedCourseIndex} />}
      </div>
    </div>
  );
}
