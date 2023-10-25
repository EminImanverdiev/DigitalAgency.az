import React,{useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export default function AboutCounter() {
   const [counterOn,setCounterOn]=useState(false)
  return (
   <ScrollTrigger  onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

    <section id='aboutcounter'>
        <h1>Achievement of Roots</h1>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industry's</p>
       <div className="container-fluid">
          <div className="row">
           <div className="col-xxl-3 col-md-6 col-lg-4">
              <h2><CountUp start={0} end={100} duration={80} delay={0}></CountUp></h2>      
              <h6>Satisfied Customers</h6>
           </div>
           
           <div className="col-xxl-3 col-md-6 col-lg-4">
              {<h2><CountUp start={0} end={180} duration={80} delay={0}></CountUp></h2>}       
              <h6>Project Completed</h6>
           </div>

           <div className="col-xxl-3 col-md-6 col-lg-4">
              {<h2><CountUp start={0} end={200} duration={80} delay={0}></CountUp></h2>}
              <h6>Employees</h6>
           </div>

           <div className="col-xxl-3 col-md-6 col-lg-4">
              {<h2><CountUp start={0} end={1200} duration={80} delay={0}></CountUp></h2>}
              <h6>Awards Winning</h6>
           </div>
 
          </div>
       </div>
    </section>
    </ScrollTrigger>

  )
}
