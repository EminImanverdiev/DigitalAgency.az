import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'
import RespNavbar from '../RespNavbar/RespNavbar';
export default function ProductHeader() {
  useEffect(()=>{
    AOS.init()
},[])
  return (
    <section id='productheader'>
        <RespNavbar/>
        <Navbar/>
         <div className="container-fluid">
             <div className="row">
                <div className="col-xxl-6"  data-aos="fade-up">
                     <h1>Product Design</h1>
                     <p>It is a long established fact that a reader be distracted.</p>
                </div>
             </div>
         </div>
    </section>
  )
}
