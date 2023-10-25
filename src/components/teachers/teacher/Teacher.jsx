import React from "react";
import "./style.css";
export default function Teacher({ teacher }) {
  const imgUrl = `http://localhost:8090/image/download/${teacher?.imageData}`;
  return (
    <div className="teacherWrapper">
      <div className="imgWrapper">
        <img src={imgUrl} />
      </div>
      <h6>
        {teacher.name}
        <span> </span>
        {teacher.surname}
      </h6>
      <p>{teacher.about}</p>
      {/* <p>{teacher.courseName}</p> */}
    </div>
  );
}
