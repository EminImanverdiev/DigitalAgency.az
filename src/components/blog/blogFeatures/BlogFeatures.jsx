import React from "react";
import "./style.css";
import BlogFeature from "./blogFeature/BlogFeature";
export default function BlogFeatures() {
  const blogFeatureData = [
    {
      id: 1,
      feature: "Scaleable",
      featureContent:
        "Fully flexible components made in figma. Ready for your next project.",
    },
    {
      id: 2,
      feature: "Easy & Powerful",
      featureContent:
        "Fully flexible components made in figma. Ready for your next project.",
    },
    {
      id: 3,
      feature: "Time Saver",
      featureContent:
        "Fully flexible components made in figma. Ready for your next project.",
    },
    {
      id: 4,
      feature: "Get Sh*t Done",
      featureContent:
        "Fully flexible components made in figma. Ready for your next project.",
    },
  ];
  return (
    <div className="container">
      <div className="blogFeatures">
        {blogFeatureData.map((feature, index) => (
          <BlogFeature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}
