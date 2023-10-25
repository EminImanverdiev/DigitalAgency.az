import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default class AboutInternship extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay:true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
      return (
        <section id='aboutinternship'>
                     <div className="container-fluid">
                         <h6>Team Members</h6>
                         <h4>Meet our Team</h4>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Slider {...settings}>
                 <div className="row d-flex">
                    <div className="col-xxl-4">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                        <h6>Mr.Hassan Magdy</h6>
                        <p>CEO , ProCrew</p>
                    </div>
                    <div className="col-xxl-7">
                         <h3>Web API Development</h3>
                         <p>In order to make your business more secure and for the
                             ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like:-</p>
                         <ul>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>E-bay integration</span></li>
                         </ul>
                         <div className="intern-btn">
                             <Link to="/agency/intern" className="link">Tecrubeye qosul <i className="fa-solid fa-arrow-right"></i></Link>
                         </div>
                     </div>
                 </div>
                 <div className="row d-flex">
                    <div className="col-xxl-4">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                        <h6>Mr.Hassan Magdy</h6>
                        <p>CEO , ProCrew</p>
                    </div>
                    <div className="col-xxl-7">
                         <h3>Web API Development</h3>
                         <p>In order to make your business more secure and for the
                             ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like:-</p>
                         <ul>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>Configuration & installation of shopping cart software</span></li>
                             <li><span>E-bay integration</span></li>
                         </ul>
                         <div className="intern-btn">
                         <Link to="/agency/intern" className="link">Tecrubeye qosul <i className="fa-solid fa-arrow-right"></i></Link>
                         </div>
                     </div>
                 </div>
        </Slider>
        </div>
        </section>
      )
    }
  }
  


















// export default class AboutInternship extends Component {
//   render() {
//     return (
//         <section id='aboutinternship'>
//             <div className="container-fluid">
//                 <h6>Team Members</h6>
//                 <h4>Meet our Team</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
//                 <div className="row">
//                     <div className="col-xxl-4">
//                         <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="" />
//                         <h6>Mr.Hassan Magdy</h6>
//                         <p>CEO , ProCrew</p>
//                     </div>
//                     <div className="col-xxl-7">
//                         <h3>Web API Development</h3>
//                         <p>In order to make your business more secure and for the
//                             ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like:-</p>
//                         <ul>
//                             <li><span>Configuration & installation of shopping cart software</span></li>
//                             <li><span>Configuration & installation of shopping cart software</span></li>
//                             <li><span>Configuration & installation of shopping cart software</span></li>
//                             <li><span>E-bay integration</span></li>
//                         </ul>
//                         <div className="intern-btn">
//                             <a href="#">Tecrubeye qosul <i class="fa-solid fa-arrow-right"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
//   }
// }
