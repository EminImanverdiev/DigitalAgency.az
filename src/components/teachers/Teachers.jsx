import React, { useEffect } from "react";
import Slider from "react-slick";
import Teacher from "./teacher/Teacher";
import { useCoursesContext } from "../../contexts/coursesContext/CoursesContext";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function Teachers() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { teachers } = useCoursesContext();

  // AOS Animate
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="teachersSliderWrapper"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h5>Müəllimlər</h5>

      <div className="container">
        <div className="sliderWrapper">
          <Slider {...settings} className="slider ">
            {teachers?.map((teacher, index) => {
              return <Teacher key={index} teacher={teacher} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
