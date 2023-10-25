import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function Blog({ blog }) {
  const imgUrl = `http://localhost:8090/image/download/${blog?.imageData}`;

  // AOS Animate
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="blog" data-aos="zoom-in-up">
      <div className="blogImgWrapper">
        <img src={imgUrl} alt="blog" />
      </div>
      <h4>{blog.title}</h4>
      <p>{blog.content}</p>
    </div>
  );
}
