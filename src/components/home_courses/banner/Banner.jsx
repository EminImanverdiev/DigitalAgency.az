import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import dhLogo from "../../../assets/images/dhLogo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="coursesBanner">
      <div className="container">
        <Slider {...settings} className="slider ">
          <div className="bannerWrapper">
            <div className="bannerContent" data-aos="fade-up">
              <h1>DigitalHands</h1>
              <span>Course.</span>
              <p>To boost your business and sales with Roots</p>
              <Link to="/" className="applyBtn">
                Müraciət et
              </Link>
            </div>
            <div className="imgWrapper">
              <img src={dhLogo} alt="digital hands" />
            </div>
          </div>
          <div className="bannerWrapperNext">
            <div className="imgWrapper">
              <img
                src="https://us.123rf.com/450wm/andreysuslov/andreysuslov1905/andreysuslov190500001/122585893-web-design-and-coding-in-internet-page-development-languages-designer-develops-site-layout-in.jpg?ver=6"
                alt="digital hands"
              />
            </div>
            <div className="bannerContent" data-aos="fade-up">
              <h6>Craft Your Future</h6>
              <h5>Uncover Your Potential with Our Courses!</h5>
              <p>
                Craft a future that you're proud of with our comprehensive
                courses tailored for success. Whether you're looking to advance
                your career, explore new passions, or dive into innovative
                technologies, we have the perfect learning path for you. Our
                courses provide practical skills and expert guidance, helping
                you shape a fulfilling and prosperous future. Enroll now to take
                the first step towards a brighter tomorrow.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
