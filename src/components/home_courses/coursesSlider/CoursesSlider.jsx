import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { BsArrowRightShort } from "react-icons/bs";
import vector1 from "../../../assets/images/vector.png";
import vector2 from "../../../assets/images/vector11.png";
import vector3 from "../../../assets/images/vector3.png";
import vector4 from "../../../assets/images/vector4.png";
import vector5 from "../../../assets/images/vector5.png";
import vector6 from "../../../assets/images/vector6.png";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CoursesSlider() {
  useEffect(() => {
    Aos.init();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
  return (
    <div className="coursesSliderWrapper">
      <div className="container">
        <div className="sliderWrapper">
          <Slider {...settings} className="slider ">
            <div className="slideWrapper">
              <div className="coursesFlex" data-aos="fade-right">
                <div className="courseColLeft">
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector3} />
                    </div>
                    <h5>Front-end</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector1} />
                    </div>
                    <h5>React</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                </div>
                <div className="courseColRight">
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector2} />
                    </div>
                    <h5>Full-stack</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector4} />
                    </div>
                    <h5>Front-end (next.js)</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                </div>
              </div>
              <div className="coursesTitle" data-aos="fade-left">
                <p>Proqramlaşdırma kursları</p>
                <Link to={ROUTES.COURSES} className="readMoreBtn">
                  <span>Daha çox</span> <BsArrowRightShort />
                </Link>
              </div>
            </div>
            <div className="slideWrapper slideWrapper-design">
              <div className="coursesFlex" data-aos="fade-right">
                <div className="courseColLeft">
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector5} />
                    </div>
                    <h5>Qrafik dizayn</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                </div>
                <div className="courseColRight">
                  <div className="courseItem">
                    <div className="imgWrapper">
                      <img src={vector3} />
                    </div>
                    <h5>UI/UX dizayn</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor...
                    </p>
                  </div>
                </div>
              </div>
              <div className="coursesTitle" data-aos="fade-left">
                <p>Dizayn kursları</p>
                <Link to={ROUTES.COURSES} className="readMoreBtn">
                  <span>Daha çox</span> <BsArrowRightShort />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
