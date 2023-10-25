import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import {AiOutlineArrowRight} from 'react-icons/ai'
import 'aos/dist/aos.css'
function ServiceTitle() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section id='servicepart'>
            <div className='serv-title'><h6><a href="#">Home  </a> <AiOutlineArrowRight className='right-icon'/> <span>Services</span></h6></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-pic" style={{backgroundImage:`url("https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024")`}}>
                    <Link to="/agency/search" className='col-det c0l-det link'>View Details<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="col-xl-6 col-md-6 col-inf">
                        <h3>Custom Ecommerce Web <br /> Store Development</h3>
                        <p>In order to make your business more secure and for the <br />
                            ease of use we offer customized eCommerce website <br /> development and design services using the cutting edge <br /> technologies with the latest features like:-</p>
                        <ul className='col-ul'>
                            <li>Configuration & installation of shopping cart software</li>
                            <li>Secure payment gateway integration</li>
                            <li>B2B & B2C e-commerce solutions</li>
                            <li>E-bay integration</li>
                            <li>Application development</li>
                            <li>Modification of existing online store</li>
                        </ul>
                        <Link to="/agency/apply" className='apply-href link'>Muraciet et<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceTitle