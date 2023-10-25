import React, { useState } from "react";
import logo from "../../assets/images/logoCourse.png";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaGraduationCap, FaTimes, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import SearchResult from "./searchResult/SearchResult";
import { useCoursesContext } from "../../contexts/coursesContext/CoursesContext";
import "./style.css";

export default function Header() {
  // Switch effect

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);

    if (!toggle) {
      setTimeout(() => {
        navigate("/");
      }, 300);
    }
  };

  // Mobile menubar

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);

  //Searchbar

  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");

  const search = (data) => {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
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

  //Get  courses
  const { courses } = useCoursesContext();

  return (
    <div className={toggleMenu ? "" : "container"}>
      <header>
        <div className="logo">
          <Link
            to={ROUTES.HOME_COURSES}
            className="logoLink"
            style={{ width: "400px" }}
          >
            <img src={logo} alt="digital hands" />
            <h1 style={{ marginTop: "0", width: "400px" }}>Digital Hands</h1>
          </Link>
        </div>
        <nav className={toggleMenu ? "nav-menu active" : "nav-menu"}>
          <ul className="wrapperUl">
            <li>
              <NavLink to={ROUTES.HOME_COURSES} className="navLink">
                <span>Əsas</span>
              </NavLink>
            </li>
            <li>
              <span className="navLink">
                <span>Xidmətlər</span>
                <BsChevronDown
                  className="chevron"
                  size={toggleMenu ? 22 : 14}
                />
              </span>
              <ul className="submenu">
                <li>
                  <Link to={ROUTES.COURSES}>Online dərslər</Link>
                </li>
                <li>
                  <Link to={ROUTES.NETWORKING}>Networking fürsəti</Link>
                </li>
              </ul>
            </li>
            <li>
              <span className="navLink">
                <span>Təcrübə</span>
                <BsChevronDown
                  className="chevron"
                  size={toggleMenu ? 22 : 14}
                />
              </span>
              <ul className="submenu">
                <li>
                  <Link to={ROUTES.TEACHERS}>Müəllimlər</Link>
                </li>
                <li>
                  <Link to={ROUTES.GRADUATES}>Məzunlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={ROUTES.CORPORATE} className="navLink">
                <span>Korporativ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.BLOG} className="navLink">
                <span>Blog</span>
              </NavLink>
            </li>

            <li>
              <span className="navLink">
                <span>Əlaqə</span>
                <BsChevronDown
                  className="chevron"
                  size={toggleMenu ? 22 : 14}
                />
              </span>
              <ul className="submenu">
                <li>
                  <Link to={ROUTES.CONSULTATION}>Konsultasiya</Link>
                </li>
                <li>
                  <Link to={ROUTES.CONTACT}>Əlaqə</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="rightMobile">
            <div className="searchWrapper">
              <FiSearch className="searchIcon" />
            </div>
            <div className="toggle" onClick={handleToggle}>
              <div className={`${toggle ? "toggleActive" : "toggleDeActive"}`}>
                <FaGraduationCap className="courseIcon" />
              </div>
            </div>
          </div>
        </nav>
        <div className="right">
          <div className="searchWrapper">
            <div className="searcBar">
              <input
                type="text"
                className={active ? "input active" : "input"}
                placeholder="search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query ? (
                <button
                  className="btn"
                  type="submit"
                  onClick={() => setActive(!active)}
                >
                  <AiOutlineClose
                    onClick={handleClearSearch}
                    size={22}
                    className="searchIcon"
                  />
                </button>
              ) : (
                <button
                  className="btn"
                  type="submit"
                  onClick={() => setActive(!active)}
                >
                  <BiSearch className="searchIcon" onClick={handleSearch} />
                </button>
              )}
            </div>
          </div>
          <div className="toggle" onClick={handleToggle}>
            <div className={`${toggle ? "toggleActive" : "toggleDeActive"}`}>
              <FaGraduationCap className="courseIcon" />
            </div>
          </div>
        </div>

        <div onClick={handleClick} className="menuBtns">
          {toggleMenu ? (
            <FaTimes color="#FFF" size={36} />
          ) : (
            <FaBars color="#FFF" size={30} />
          )}
        </div>
      </header>
      {query && (
        <div className="overlay">
          {query && <SearchResult data={search(courses)} />}
        </div>
      )}
    </div>
  );
}
