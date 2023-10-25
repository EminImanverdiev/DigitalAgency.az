import React from 'react'
import { Link } from 'react-router-dom'

export default function AgencyContact() {
    return (<>
        <section id='agencycontact'>
          <div className="container-fluid">
             <h6>Contact Us</h6>
             <h4>Let us know what you think!</h4>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi provident dolore quis esse eius, at aliquam? Laboriosam porro assumenda cumque, veritatis sed maiores officiis necessitatibus ducimus voluptas obcaecati? Eaque.</p>
             <div className="social-icons">
                <Link to="/contact" className='link'><i className="fa-brands fa-facebook"></i></Link>
                <Link to="/contact" className='link'><i className="fa-brands fa-google"></i></Link>
                <Link to="/contact" className='link'><i className="fa-brands fa-instagram"></i></Link>
                <Link to="/contact" className='link'><i className="fa-brands fa-skype"></i></Link>
                <Link to="/contact" className='link'><i className="fa-brands fa-twitter"></i></Link>
             </div>
             <Link className='num-href link'><i className="fa-solid fa-phone"></i> Call Us: <span>123456789</span></Link>
          </div>
        </section>
      </>
    
      )
}
