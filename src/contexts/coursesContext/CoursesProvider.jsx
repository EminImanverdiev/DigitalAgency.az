import React, { useState, useEffect } from "react";
import CoursesContext from "./CoursesContext";
import axios from "axios";

export function CoursesProvider({ children }) {
  const [teachers, setTeachers] = useState([]);
  const [graduates, setGraduates] = useState([]);
  const [collections, setCollections] = useState([]);
  const [category, setCategory] = useState([]);
  const [courses, setCourses] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    // Fetch Teachers
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:8090/teacher/getAll");
        setTeachers(res.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    // Fetch Graduates
    const fetchGraduates = async () => {
      try {
        const res = await axios.get("http://localhost:8090/graduate/getAll");
        setGraduates(res.data);
      } catch (error) {
        console.error("Error fetching graduates:", error);
      }
    };
    fetchGraduates();
  }, []);

  useEffect(() => {
    // Fetch Collection
    const fetchCollection = async () => {
      try {
        const res = await axios.get("http://localhost:8090/collection/getAll");
        setCollections(res.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };
    fetchCollection();
  }, []);

  useEffect(() => {
    // Fetch Category
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:8090/category/getAll");
        setCategory(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    // Fetch Course
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8090/course/getAll");
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    // Fetch Blog-Posts
    const fetchBlogPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8090/blog-post/getAll");
        setBlogPosts(res.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    // Fetch Contact Information
    const fetchContactInfo = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8090/contact-information/getAll"
        );
        setContactInfo(res.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchContactInfo();
  }, []);

  const contextValue = {
    teachers,
    graduates,
    collections,
    category,
    courses,
    blogPosts,
    contactInfo,
  };

  return (
    <CoursesContext.Provider value={contextValue}>
      {children}
    </CoursesContext.Provider>
  );
}
