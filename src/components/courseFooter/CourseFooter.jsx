import React, { useEffect, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../utils/routes";
export default function CourseFooter() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer id="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="footerAddress">
            <h3>Roots</h3>
            <div className="address">
              <p>Lorem Ipsum, 235 Simply, printing, Pin 309 309</p>
              <p>roots00@gmail.com</p>
              <p>+91 80005 54442</p>
            </div>
          </div>
          <div className="footerInfo">
            <h5>Məlumat</h5>
            <div className="linksWrapper">
              <Link to={ROUTES.HOME_COURSES} className="link">
                Əsas
              </Link>

              <Link to={ROUTES.SERVICES} className="link">
                Xidmətlər
              </Link>
              <Link to="/products" className="link">
                Təcrübə
              </Link>
              <Link to={ROUTES.BLOG} className="link">
                Blog
              </Link>
            </div>
          </div>
          <div className="footerServices">
            <h5>Xidmətlər</h5>
            <div className="linksWrapper">
              <Link to={ROUTES.COURSES} className="link">
                Online dərslər
              </Link>
              <Link to={ROUTES.NETWORKING} className="link">
                Networking fürsəti
              </Link>
            </div>
          </div>
          <div className="support">
            <h5>Dəstək</h5>
            <div className="linksWrapper">
              <Link to={ROUTES.FAQ} className="link">
                FAQ
              </Link>
              <Link to="/services" className="link">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footerCopyRight">
          <p>©DigitalHands2020.</p>
          <p>Privacy Policy | Terms & Conditions</p>
          <div className="socialIconsWrapper">
            <Link className="link">
              <BiLogoFacebook />
            </Link>
            <Link className="link">
              <BiLogoLinkedin />
            </Link>
            <Link className="link">
              <BiLogoTwitter />
            </Link>
            <Link className="link">
              <BiLogoInstagram />
            </Link>
            <Link className="link">
              <BiLogoYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={handleClick}
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isVisible ? "1" : "0",
          position: "fixed",
          right: "30px",
          bottom: "40px",
          background: "gray",
          color: "#FFFFFF",
          cursor: "pointer",
          boxShadow: "0 0 10px #fff",
          borderRadius: "5px",
          fontSize: "20px",
          transition: "0.5s",
        }}
      >
        <AiOutlineArrowUp />
      </div>
    </footer>
  );
}
