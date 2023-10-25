import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import Logo3 from "../../../assets/images/f.png";
import "./PageFooter.css";
import { Link } from "react-router-dom";
function PageFooter() {
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
    <>
      <section id="page-footer">
        <img className="foot-img" src={Logo3} alt="" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-8 col-8">
              <img src={Logo} />
              <div className="element-item">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span>123 Anywhere St., Any City, 12345 Any State</span>
              </div>
              <div className="element-item">
                <i className="fa-solid fa-phone"></i> <span>123-456-7890</span>
              </div>
              <div className="element-item">
                <i class="fa-brands fa-whatsapp"></i> <span>123-923-7890</span>
              </div>
              <div className="element-item">
                <i className="fa-solid fa-envelope"></i>{" "}
                <span>support@digicove.com</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-4">
              <div className="footer-items">
                <h4>Menu</h4>
                <Link to="/service" className="link">
                  <span>Services</span>{" "}
                </Link>
                <br />
                <Link to="/project" className="link">
                  <span>Projects</span>{" "}
                </Link>
                <br />
                <Link to="/about" className="link">
                  <span>Industry</span>{" "}
                </Link>
                <br />
                <Link to="/contact" className="link">
                  <span>Contact Us</span>{" "}
                </Link>
                <br />
                <Link to="/about" className="link">
                  <span>About Us</span>{" "}
                </Link>
                <br />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
              <div className="footer-items">
                <h4>Quick Links</h4>
                <Link to="/" className="link">
                  <span>Privacy Policy</span>{" "}
                </Link>{" "}
                <br />
                <Link to="/" className="link">
                  <span>Term & Conditions</span>{" "}
                </Link>{" "}
                <br />
                <Link to="/" className="link">
                  <span>Cookie Policy</span>{" "}
                </Link>{" "}
                <br />
              </div>
            </div>
            <div style={{
              opacity: isVisible ? "1" : "0",
              transition:"0.4s",
              zIndex:"9999"
            }} onClick={handleClick} className="col-xxl-4 col-xl-4 col-lg-2 col-md-8 col-6 up-icon-box">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          </div>
          <div className="social-icons">
            <span>
              <h6>Follow us</h6>
            </span>
            <div className="icon-elements">
              <Link className="link" to="/">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link className="link" to="/">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className="link" to="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link className="link" to="/">
                <i className="fa-brands fa-google"></i>
              </Link>
              <Link className="link" to="/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <h6>
            Copy@ 2023 <span>Digicove.</span> All rights reserved by{" "}
            <span>BravisThemes</span>
          </h6>
        </div>
      </section>
    </>
  );
}
export default PageFooter;
