import React from "react";
import "./style.css";
import Blog from "./blog/Blog";
import { useCoursesContext } from "../../../contexts/coursesContext/CoursesContext";
export default function Blogs() {
  const { blogPosts } = useCoursesContext();
  return (
    <div className="blogs">
      {blogPosts.map((blog, index) => (
        <Blog blog={blog} key={index} />
      ))}
    </div>
  );
}
