import React, { useEffect } from "react";
import "../AgencyPage/Agency.css";
import img1 from "../../../assets/images/web.png";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function AgencyService() {
  useEffect(()=>{
  AOS.init();
  },[])
  return (
    <>
      <section id="agencyservice">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-right">
              <div className="boxes">
                <div className="service-box down-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box down-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6" data-aos="fade-left">
              <h6>Services</h6>
              <h2>
                Our Best in class
                <br />
                Services includes:
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud <br />{" "}
                exercitation ullamco laboris nisi.
              </p>
              <Link to="/agency/service" className="link">
                All Services <i className="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="resp-service">
        <div className="container-fluid">
        <div className="row">
            <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
              <div className="boxes">
                <div className="service-box down-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box down-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="service-box">
                  <img src={img1} alt="" />
                  <h6>Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br /> eiusmod tempor...
                  </p>
                  <a href="#">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
              <h6>Services</h6>
              <h2>
                Our Best in class
                <br />
                Services includes:
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud <br />{" "}
                exercitation ullamco laboris nisi.
              </p>
              <Link to="/service" className="link">
                All Services <i className="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AgencyService;
