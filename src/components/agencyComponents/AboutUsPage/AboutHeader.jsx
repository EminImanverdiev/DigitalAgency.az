import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'
import RespNavbar from '../RespNavbar/RespNavbar'

function AboutHeader() {
   useEffect(()=>{
      AOS.init()
  },[])
  return (
    <section id='aboutheader'>
       <RespNavbar/>
        <Navbar/>
         <div className="container-fluid head-content-about">
            <div className="row">
                 <div className="col-xxl-6"  data-aos="fade-up">
                    <h1><b>Good Design</b></h1>
                    <p>Makes a Products useful</p>
                 </div>
                 <div className="col-xxl-6">
                     <img src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png" alt="digitalhands-about1" />
                     <img src="https://kinsta.com/wp-content/uploads/2017/05/how-to-optimize-images-for-web-and-performance.jpg" alt="digitalhands-about2" />
                     <img src="https://media.istockphoto.com/id/1328486545/fr/photo/femme-tenant-la-main-connexion-r%C3%A9seau-mondiale-communication-internet-technologie-de.jpg?s=170667a&w=0&k=20&c=qJP8cXT_BaY6zxy9KY6vc5VMEciGOCo54IjvDZalv_0=" alt="digitalhands-about3" />
                 </div>
            </div>
         </div>
    </section>
  )
}
export default AboutHeader