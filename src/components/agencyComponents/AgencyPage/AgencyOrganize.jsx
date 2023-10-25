import React from "react";
import img1 from "../../../assets/images/g1.png";
import "../AgencyPage/Agency.css";
import v1 from "../../../assets/images/v1.png";
import AgencyGallery from "./AgencyGallery";
import {GrPlan} from "react-icons/gr"
import {PiSketchLogoThin} from 'react-icons/pi'
import {AiOutlineBgColors} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {TiTickOutline} from 'react-icons/ti'

function AgencyOrganize() {
  return (
    <>
      <section id="agencyorganize">
        <div className="container-fluid">
          <h2>Organize Process</h2>
          <p>
            Lorem Ipsum is simply dummy text of the and typesetting <br />
            industry. Lorem Ipsum has been the industry's standard{" "}
          </p>
          <div className="row">
            <div className="organize-box">
              <div className="box-circle down-box">
                <img src={img1} alt="" />
              </div>
              <h6>Discuss</h6>
            </div>
            <img className="vector" src={v1} alt="" />
            <div className="organize-box">
              <div className="box-circle">
                 <GrPlan className="box-circle-icon"/>
              </div>
              <h6>Planning</h6>
            </div>
            <img className="vector" src={v1} alt="" />
            <div className="organize-box">
              <div className="box-circle down-box">
                <PiSketchLogoThin className="box-circle-icon" />
              </div>
              <h6>Sketch</h6>
            </div>
            <img className="vector" src={v1} alt="" />
            <div className="organize-box">
              <div className="box-circle">
                <AiOutlineBgColors className="box-circle-icon"/>
              </div>
              <h6>Design</h6>
            </div>
            <img className="vector" src={v1} alt="" />
            <div className="organize-box">
              <div className="box-circle down-box">
                <BsCodeSlash className="box-circle-icon"/>
              </div>
              <h6>Development</h6>
            </div>
            <img className="vector" src={v1} alt="" />
            <div className="organize-box">
              <div className="box-circle">
                <TiTickOutline className="box-circle-icon" />
              </div>
              <h6>Finish</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AgencyOrganize;
