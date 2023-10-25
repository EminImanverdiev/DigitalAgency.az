import React, { useEffect } from "react";
// import img1 from "../../../assets/images/a.png";
import "../AgencyPage/Agency.css";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function AgencyAbout() {
  useEffect(()=>{
        AOS.init()
  },[])
  return (
    <section id="agencyabout">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6 col-lg-6" data-aos="fade-down">
            <h6>Projects</h6>
            <h2>
              Boost your <br /> Business With US
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi.
            </p>
            <Link to="/project" className="link">
              Daha çox <i className="fa-solid fa-arrow-right"></i>{" "}
            </Link>
          </div>
          <div className="col-xxl-6 col-lg-6" data-aos="fade-down">
            <img src="https://www.battelle.org/images/default-source/social-media-images/doing-business-with-us/open-graph-doing-business-with-us.jpg?sfvrsn=9f449de1_1" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AgencyAbout;
