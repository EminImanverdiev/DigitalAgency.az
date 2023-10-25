import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RespNavbar from "../RespNavbar/RespNavbar";
import "./Search.css";
import PageFooter from "../Footer/PageFooter";
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <section className="search">
      <div id="search">
        <div id="searchheader">
          <RespNavbar />
          <Navbar />
          <div className="header-content">
            <h6>Ready. Set. Wireframe.</h6>
            <div className="content-inp">
              <input type="text" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="container-fluid search-con">
          <div className="row">
            <div
              className="col-xxl-4 col-md-6"
              style={{
                backgroundImage: `url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`,
              }}
            >
              <Link to="/agency/search" className='col-det c0l-det link'>View Details<i className="fa-solid fa-arrow-right"></i></Link>

            </div>
            <div
              className="col-xxl-4 col-md-6"
              style={{
                backgroundImage: `url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`,
              }}
            >
              <Link to="/agency/search" className='col-det c0l-det link'>View Details<i className="fa-solid fa-arrow-right"></i></Link>

            </div>
            <div
              className="col-xxl-4 col-md-6"
              style={{
                backgroundImage: `url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`,
              }}
            >
              <Link to="/agency/search" className='col-det c0l-det link'>View Details<i className="fa-solid fa-arrow-right"></i></Link>

            </div>
          </div>
        </div>
        <div className="box-all">
          <Link  className="link all-chosen">
            See More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <PageFooter />
    </section>
  );
}
