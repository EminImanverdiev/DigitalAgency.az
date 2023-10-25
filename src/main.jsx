import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AgencyProvider } from "./contexts/agencyContext/AgencyProvider.jsx";
import { CoursesProvider } from "./contexts/coursesContext/CoursesProvider.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AgencyProvider>
    <CoursesProvider>
      <App />
    </CoursesProvider>
  </AgencyProvider>
  // </React.StrictMode>
);
