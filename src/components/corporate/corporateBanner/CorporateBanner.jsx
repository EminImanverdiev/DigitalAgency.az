import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function CorporateBanner() {
  return (
    <div className="container">
      <div className="corporateCenter">
        <div className="corporateInfo" data-aos="fade-right">
          <h3>Korporativ əməkdaşlıq fürsəti</h3>
          <p>A dark themed wireframe kit made of interchangeable.</p>
          <Link className="joinBtn">Müraciət et</Link>
        </div>
      </div>
    </div>
  );
}
