import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { AiOutlineDesktop } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAgencyContext } from "../../../contexts/agencyContext/AgencyContext";
import ServiceSearch from '../../../components/agencyComponents/SearchService/SearchService'
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setTimeout(() => {
        navigate("/home_courses");
      }, 300);
    }
  };
  const [query, setQuery] = useState("");

  const search = (data) => {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((item) =>
      item.content.toLowerCase().includes(lowerCaseQuery)
    );
  };
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    setIsSearching(true);
  };
  const handleClearSearch = () => {
    setIsSearching(false);
    setQuery("");
  };

  const searchtoggle = () => {
    document.querySelector('.navbar-search').classList.toggle('active')
  }

  const { services } = useAgencyContext();
  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  DigitalHands
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link link" to="/">
                      {" "}
                      <span>Ana Səhifə</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/agency/service" className="nav-link link" href="#">
                      <span>Xidmətlər</span>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/agency/project" className="nav-link link" >
                      <span>Proyekt</span>{" "}
                      <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <a className="menu-item link" href="#">
                          İdarəetmə panelləri toplusu
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/agency/product" className="nav-link link">
                      <span>Sənaye</span>{" "}
                      <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/agency/intern" className="menu-item link">
                          Tecrube Programi
                        </Link>
                      </li>
                      <li>
                        <Link to="/agency/search" className="menu-item link">
                          Axtaris {" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/agency/apply" className="menu-item link">
                          Muraciet et {" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/agency/about" className="nav-link link">
                      <span>Haqqımızda</span>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/agency/contact" className="nav-link link">
                      <span>Əlaqə</span>
                    </Link>
                  </li>
                  <li className="nav-item search-item" onClick={searchtoggle}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                </ul>
                <div className="right">
                  <div className="toggle" onClick={handleToggle}>
                    <div className={`${toggle ? "toggleActive" : "toggleDeActive"}`}>
                      <AiOutlineDesktop className="courseIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <input placeholder="Sizə necə kömək edə bilərik?" type="text" className="navbar-search" value={query}
        onChange={(e) => setQuery(e.target.value)} />
      {query && (
        <div className="overlay">
          {query && <ServiceSearch data={search(services)} />}
        </div>
      )}  
    </>

  );
}

export default Navbar