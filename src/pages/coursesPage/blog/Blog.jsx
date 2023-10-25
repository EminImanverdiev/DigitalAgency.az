import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import Blogs from "../../../components/blog/blogs/Blogs";
import BlogFeatures from "../../../components/blog/blogFeatures/BlogFeatures";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="blogSection">
      <Header />
      <div className="container">
        <div className="blogLabel">
          <div className="blogInfo" data-aos="flip-right">
            <p>Label goes here</p>
            <h4>Blog</h4>

            <p>
              Welcome to Agency DigitalHands, where we take your cravings to a
              whole new level! Our mouthwatering burgers are made from 100% beef
              and are served on freshly baked buns.
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="blogCenter">
          <div className="blogInfo" data-aos="fade-right">
            <h3>Stop making components over and over again.</h3>
            <p>
              A dark themed wireframe kit made of interchangealbe components to
              speed up your next project.
            </p>
            <Link className="joinBtn">Qoşul</Link>
          </div>
          <div className="blogImgWrapper" data-aos="fade-left">
            <img
              src="https://blog.hyperiondev.com/wp-content/uploads/2018/11/Blog-Top-Programming-Blogs.jpg"
              alt="blog"
            />
          </div>
        </div>
        <BlogFeatures />
        <Blogs />
      </div>
      <CourseFooter />
    </div>
  );
}
