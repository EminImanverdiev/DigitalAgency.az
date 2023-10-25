import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BlogFeature({ feature }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="blogFeature" data-aos="flip-up">
      <span>0{feature.id}</span>
      <h5>{feature.feature}</h5>
      <p className="featureContent">{feature.featureContent}</p>
    </div>
  );
}
