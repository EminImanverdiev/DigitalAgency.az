import React from "react";
import video from "../../../assets/videos/video.mp4";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import "./style.css";

export default function CourseVideo() {
  return (
    <div className="videoWrapper">
      <video
        autoPlay
        loop
        muted
        plays-inline
        className="video"
        type="video/mp4"
      >
        <source src={video} />
      </video>
      <div className="overlay">
        <p>Transform Your Future with Us!</p>
        <Link to={ROUTES.COURSES} className="startBtn">
          Start Learning Now!
        </Link>
      </div>
    </div>
  );
}
