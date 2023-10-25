import React, { useEffect } from "react";
import '../../../../components/agencyComponents/ServicePage/Service.css'
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../../components/agencyComponents/Navbar/Navbar';
import RespNavbar from '../../../../components/agencyComponents/RespNavbar/RespNavbar';
import PageFooter from '../../../../components/agencyComponents/Footer/PageFooter';
import { useAgencyContext } from "../../../../contexts/agencyContext/AgencyContext";

export default function ServiceDetail() {
  const {services} = useAgencyContext();
  const { id } = useParams();
  const selectedServiceIndex = Number(id);
  const selectedServiceItem = services[selectedServiceIndex];
  const detimage=`http://localhost:8090/image/download/${selectedServiceItem?.imageData}`;
  return (
    <section id='itemcontent'>
      <RespNavbar/>
      <Navbar/>
      <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-6">
                <img src={detimage} alt="" />
            </div>
            <div className="col-xxl-6 col-xl-6">
                 <h4>{selectedServiceItem?.title}</h4>
                 <p>{selectedServiceItem?.content}</p>
                 <div className="item-pictures">
                    <img src="https://www.eventige.com/hubfs/full-service-marketing-agency-2.png"/>
                    <img src="https://www.eventige.com/hs-fs/hubfs/Marketing-Agency-2.png?width=744&height=411&name=Marketing-Agency-2.png"/>
                    <img src="https://leaddigital.in/wp-content/uploads/2020/01/img3post.jpg"/>
                    <img src="https://www.readerdigital.com/wp-content/uploads/2018/12/social-media-strategy-2019-500x383.jpg"/>
                   </div>
            </div>
          </div>
      </div>
      <PageFooter/>
    </section>
  )
}
