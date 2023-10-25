import React, { useEffect } from "react";
import Slider from "react-slick";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function CourseSlider() {
  useEffect(() => {
    Aos.init();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const coursesData = [
    {
      id: 1,
      imgUrl:
        "https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 2,
      imgUrl:
        "https://images.pexels.com/photos/5553051/pexels-photo-5553051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Back-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 3,
      imgUrl:
        "https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Design",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 4,
      imgUrl:
        "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 5,
      imgUrl:
        "https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 6,
      imgUrl:
        "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 7,
      imgUrl:
        "https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 8,
      imgUrl:
        "https://images.pexels.com/photos/5940836/pexels-photo-5940836.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
    {
      id: 9,
      imgUrl:
        "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Front-end",
      info: " A dark themed wireframe kit made of interchangealbe components to speed up your next project.",
    },
  ];
  return (
    <div className="courseSliderWrapper">
      <div className="container">
        <div className="sliderWrapper">
          <Slider {...settings} className="slider ">
            {coursesData?.map((course, index) => {
              return (
                <div className="imgWrapper" key={index} data-aos="zoom-in-up">
                  <img src={course.imgUrl} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
