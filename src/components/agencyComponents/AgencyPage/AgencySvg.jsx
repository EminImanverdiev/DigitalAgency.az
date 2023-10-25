import React, { useEffect } from 'react';
export default function AgencySvg() {
   useEffect(() => {
      const animateCircle = () => {
         const circle = document.querySelector('.circle1');
         circle.style.animation = "moveAlongPath 45s linear infinite";
         circle.addEventListener("animationiteration", () => {
            circle.style.animation = "none";
            circle.getBoundingClientRect();
            circle.style.animation = "moveAlongPath 45s linear infinite"; 
         });
      }
      animateCircle();
   }, []);

   return (
   <section id='agencysvg'>
    <svg className='svg2' xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="800" viewBox="0 0 3000 800">
    <path d="M0,58.5c201.2,0,996.3,141.4,498.4,141.4S801.6,38.5,999.8,58.5s302.9,141.4,500.2,141.4
      s306.3-141.4,502.5-141.5s305.2,141.4,499.9,141.4c194.2,0,399.2-141.4,498.6-41.4"
      stroke="rgba(255,255,255,0.2)" stroke-width="3" fill="none" id="wire1"></path>
    <circle className="circle1" cx="0" cy="0" r="30" fill="rgba(219, 0, 255, 1)" >
      <animateMotion dur="65s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1">
        <mpath  xlinkHref="#wire1"></mpath>
      </animateMotion>
    </circle>
  </svg>
  </section>
  
   );
}
