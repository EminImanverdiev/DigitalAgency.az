import React, { useEffect } from "react";
import "./style.css";
import Header from "../../../components/header/Header";
import Teacher from "../../../components/teachers/teacher/Teacher";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import { useCoursesContext } from "../../../contexts/coursesContext/CoursesContext";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Teachers() {
  // const teachersData = [
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_zQZkXyALxSasIoArU1NWa9igqpSiiNXfQ&usqp=CAU",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  //   {
  //     id: 2,
  //     imgUrl:
  //       "https://t4.ftcdn.net/jpg/04/34/99/33/240_F_434993367_IXe3Awy09pB7uA4H7A63Rk1gJyOTGsAP.jpg",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  //   {
  //     id: 3,
  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_zQZkXyALxSasIoArU1NWa9igqpSiiNXfQ&usqp=CAU",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  //   {
  //     id: 4,
  //     imgUrl:
  //       "https://t3.ftcdn.net/jpg/02/17/76/24/240_F_217762471_NtXojk7PHVmbsIJvHSt1w4gdwkNWLweY.jpg",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  //   {
  //     id: 5,
  //     imgUrl:
  //       "https://t3.ftcdn.net/jpg/02/60/45/36/240_F_260453601_TyNm3TCziEaqXlUtnquofoxxppEAwXzG.jpg",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  //   {
  //     id: 6,
  //     imgUrl:
  //       "https://t3.ftcdn.net/jpg/02/60/45/36/240_F_260453601_TyNm3TCziEaqXlUtnquofoxxppEAwXzG.jpg",
  //     fullName: "Ad Soyad",
  //     position: "Vəzifə",
  //     courseName: "Tədris etdiyi kurs",
  //   },
  // ];

  // AOS Animate

  const { teachers } = useCoursesContext();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="teachersSection">
      <Header />
      <div className="container">
        <div className="teachersHeading" data-aos="zoom-in">
          <h5>Müəllimlər</h5>
          <p>
            Welcome to Agency DigitalHands, where we take your cravings to a
            whole new level! Our mouthwatering burgers are made from 100% beef
            and are served on freshly baked buns.
          </p>
        </div>
        <div className="teachersWrapper">
          {teachers.map((teacher, index) => (
            <Teacher teacher={teacher} key={index} />
          ))}
        </div>
      </div>
      <CourseFooter />
    </div>
  );
}
