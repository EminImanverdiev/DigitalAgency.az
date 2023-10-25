import React from "react";
import "./style.css";

export default function Graduate({ graduate }) {
  const imgUrl = `http://localhost:8090/image/download/${graduate?.imageData}`;
  return (
    <div className="graduateWrapper">
      <div className="imgWrapper">
        <img src={imgUrl} />
      </div>
      <h6>
        {graduate.name}
        <span> </span>
        {graduate.surname}
      </h6>
      <p>{graduate.content}</p>
      {/* <p>{graduate.courseName}</p> */}
    </div>
  );
}
