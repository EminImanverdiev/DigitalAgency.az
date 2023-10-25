import { Link } from '@mui/material'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function AboutMission() {
  useEffect(()=>{
    AOS.init()
},[])
  return (
    <section id='aboutmission'>
       <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6"  data-aos="fade-right">
                <h1>Mission to Change Your Business</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's t, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul>
                    <li><span>Lorem Ipsum has been the industry's</span>  </li>
                    <li><span>Lorem Ipsum has been the industry's</span>  </li>
                    <li><span>Lorem Ipsum has been the industry's</span>  </li>
                </ul>
                <Link className='link'>Muraciet et <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="col-xxl-6" data-aos="fade-left">
                <img src="https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
       </div>
    </section>
  )
}
