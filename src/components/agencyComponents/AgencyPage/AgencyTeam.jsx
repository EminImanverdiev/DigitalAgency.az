import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function AgencyTeam() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section id='agencyteam'>
            <div className="container-fluid" data-aos="fade-up">
                <div className="team-title">
                    <h6>Team Members</h6>
                    <h4>Meet our Team</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-xxl-3 col-md-6 col-lg-4">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/71323979_1200x768.jpeg?size=690:388" alt="" />
                        <h6>Ali Aliyev</h6>
                        <p>CEO, Lorem Ipsum</p>
                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/71323979_1200x768.jpeg?size=690:388" alt="" />
                        <h6>Elmar Nuraliyev</h6>
                        <p>CEO, Lorem Ipsum</p>
                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/71323979_1200x768.jpeg?size=690:388" alt="" />
                        <h6>Ramil Qarayev</h6>
                        <p>CEO, Lorem Ipsum</p>
                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/71323979_1200x768.jpeg?size=690:388" alt="" />
                        <h6>Yunis Memmedov</h6>
                        <p>CEO, Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
