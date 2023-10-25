import React from 'react'

export default function AboutLocation() {
  return (
    <section id='aboutlocation'>
          <div className="container-fluid">
             <div className="row">
                <div className="col-xxl-6">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3449478212647!2d49.85387287657486!3d40.37904685793114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d065b0441c7%3A0x5baa985ed4e4d63e!2s28th%20May%2C%20Baku!5e0!3m2!1sen!2saz!4v1696587294208!5m2!1sen!2saz" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-xxl-6">
                    <h5>Location</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    <div className="soc-inf"><i className="fa-solid fa-location-dot"></i> <span>Ünvan </span></div>
                    <div className="soc-inf"><i className="fa-solid fa-envelope"></i> <span>Email </span></div>
                    <div className="soc-inf"><i className="fa-solid fa-phone"></i> <span>1234567 </span></div>
                </div>
             </div>
          </div>
    </section>
  )
}
