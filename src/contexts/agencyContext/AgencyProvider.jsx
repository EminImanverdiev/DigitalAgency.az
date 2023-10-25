import React, { useState, useEffect } from "react";
import AgencyContext from "./AgencyContext";
import axios from "axios";
export function AgencyProvider({ children }) {
  const [contact, setContact] = useState([]);
  const [services, setServices] = useState([]);


  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8090/contact-information/getAll"
        );
        setContact(res.data);
      } catch (error) {
        console.error("Error fetching Contact post:", error);
      }
    };
    fetchContact();
  }, []);


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:8090/maintenances/getAll");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchServices();
  }, []);

  const contextValue = {
    contact,
    services
  };
  return (
    <AgencyContext.Provider value={contextValue}>
      {children}
    </AgencyContext.Provider>
  );
}
