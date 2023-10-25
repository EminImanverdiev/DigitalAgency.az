import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { ROUTES } from "../../../utils/routes";

export default function JoinUs() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <div className="joinUsSection">
        <div className="info" data-aos="fade-right">
          <h3>Korporativ əməkdaşlıq fürsəti</h3>
          <p>Şirkətin bütün işçiləri üçün kurs</p>
          <Link to={ROUTES.CORPORATE} className="joinBtn">
            Ətraflı
          </Link>
        </div>
        <div className="imgWrapper">
          <img
            src="https://t4.ftcdn.net/jpg/04/05/08/43/360_F_405084350_iTrqlhiZVfy6uDUneAzCA0DVsSRRuwJT.jpg"
            alt="blog"
          />
        </div>
      </div>
    </div>
  );
}
