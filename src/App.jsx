import React from "react";
import { ROUTES } from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/agencyPage/Pages/HomePage";
import Home_Courses from "./pages/coursesPage/home-courses/Home_Courses";
import Blog from "./pages/coursesPage/blog/Blog";
import Corporate from "./pages/coursesPage/corporate/Corporate";
import Teachers from "./pages/coursesPage/teachers/Teachers";
import Graduates from "./pages/coursesPage/graduates/Graduates";
import Courses from "./pages/courses/Courses";
import CourseDetails from "./pages/courses/courseDetails/CourseDetails";
import Contact from "./pages/coursesPage/contact/Contact";
import Services from "./pages/coursesPage/services/Services";
import Consultation from "./pages/coursesPage/consultation/Consultation";
import Networking from "./pages/coursesPage/networking/Networking";
import FAQ from "./pages/coursesPage/faq/FAQ";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ApplyPage from './pages/agencyPage/Pages/ApplyPage'
import ContactPage from './pages/agencyPage/Pages/ContactPage'
import AboutPage from './pages/agencyPage/Pages/AboutUsPage'
import InternPage from './pages/agencyPage/Pages/InternPage'
import ProductPage from './pages/agencyPage/Pages/ProductPage'
import ProjectPage from './pages/agencyPage/ProjectPage/ProjectPage'
import SearchPage from './pages/agencyPage/Pages/SearchPage'
import ServicePage from './pages/agencyPage/ServicePage/ServicePage'
import ProjectDetail from "./pages/agencyPage/ProjectPage/ProjectDetail/ProjectDetail";
import ServiceDetail from "./pages/agencyPage/ServicePage/ServiceDetail/ServiceDetail";
export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.HOME_COURSES} element={<Home_Courses />} exact />
        <Route path={ROUTES.BLOG} element={<Blog />} exact />
        <Route path={ROUTES.CORPORATE} element={<Corporate />} exact />
        <Route path={ROUTES.TEACHERS} element={<Teachers />} exact />
        <Route path={ROUTES.GRADUATES} element={<Graduates />} exact />
        <Route path={ROUTES.COURSES} element={<Courses />} exact />
        <Route path={ROUTES.COURSEDETAILS} element={<CourseDetails />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
        <Route path={ROUTES.SERVICES} element={<Services />} exact />
        <Route path={ROUTES.CONSULTATION} element={<Consultation />} exact />
        <Route path={ROUTES.NETWORKING} element={<Networking />} exact />
        <Route path={ROUTES.FAQ} element={<FAQ />} exact />
        <Route path={ROUTES.AGENCY.CONTACT} element={<ContactPage />} exact />
        <Route path={ROUTES.AGENCY.APPLY} element={<ApplyPage />} exact />
        <Route path={ROUTES.AGENCY.ABOUT} element={<AboutPage />} exact />
        <Route path={ROUTES.AGENCY.INTERN} element={<InternPage />} exact />
        <Route path={ROUTES.AGENCY.PRODUCT} element={<ProductPage />} exact />
        <Route path={ROUTES.AGENCY.PROJECT} element={<ProjectPage />} exact />
        <Route path={ROUTES.AGENCY.SEARCH} element={<SearchPage />} exact />
        <Route path={ROUTES.AGENCY.SERVICE} element={<ServicePage />} exact />
        <Route path={ROUTES.AGENCY.PRODUCT} element={<ProductPage />} exact />
        <Route path={ROUTES.AGENCY.PROJECTDETAIL} element={<ProjectDetail />} exact />
        <Route path={ROUTES.AGENCY.SERVICEDETAIL} element={<ServiceDetail />} exact />

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
