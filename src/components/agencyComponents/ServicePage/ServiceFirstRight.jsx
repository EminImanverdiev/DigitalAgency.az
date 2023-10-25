import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ServiceDetail from '../../../pages/agencyPage/ServicePage/ServiceDetail/ServiceDetail'
import { useAgencyContext } from "../../../contexts/agencyContext/AgencyContext";

export default function ServiceFirstRight() {
    const [selectedServiceIndex, setselectedServiceIndex] = useState(null);

    const {services} = useAgencyContext();
    const navigate = useNavigate();
   
    const handleServiceClick = (index) => {
        setselectedServiceIndex(index);
        navigate(`/service/${index}`);
    };
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <section id='servicepart'>
            <div className="container-fluid">
                {
                    services?.map((service, index) => (
                        <>
                        <div className="row" key={index}>
                            <div className="col-xl-6 col-md-6 col-inf" data-aos="fade-left">
                                <h3>{service.title}</h3>
                                <p>{service.content}</p>
                                <ul className='col-ul'>
                                  
                                            <li>Configuration & installation of shopping cart software</li>
                                            <li>Secure payment gateway integration</li>
                                            <li>E-bay integration</li>
                                </ul>
                                      
                                <Link to="/agency/apply" className='apply-href link'>Muraciet et<i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            <div data-aos="fade-right" className="col-xl-6 col-md-6 col-pic" style={{backgroundImage:`url(http://localhost:8090/image/download/${service.imageData})`}}>
                                <a  className='col-det c0l-det link' onClick={() => handleServiceClick(index)}>View Details<i className="fa-solid fa-arrow-right"></i></a>
                            </div>                    
                        </div>
                        </>
                    ))

                }
               {selectedServiceIndex && <ServiceDetail service={selectedServiceIndex} />}

            </div>
        </section>
        
    )
}
