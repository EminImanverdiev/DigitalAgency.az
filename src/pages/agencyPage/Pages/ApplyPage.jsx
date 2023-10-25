import React from 'react'
import Navbar from '../../../components/agencyComponents/Navbar/Navbar'
import RespNavbar from '../../../components/agencyComponents/RespNavbar/RespNavbar';
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
import backgroundimg from '../../../assets/images/back.png'
import '../../../components/agencyComponents/ApplyPage/Apply.css'
export default function ApplyPage() {
    return (
        <>
            <section id='apply'>
                <RespNavbar />
                <Navbar />
                <div className="apply-content">
                    <div className="container-fluid apply-con">
                        <div className="row">
                            <div className="col-xxl-6 col-md-6">
                                <img src={backgroundimg} />
                                <h2>Let us know what you think!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                                <div className="social-icons">
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-6">
                                <div className="apply-box">
                                    <form action="/action_page.php">
                                       <div className="spec-box">
                                             <label for="aname">Name</label><br />
                                             <input placeholder='Emin' type="text" id="aname" />
                                       </div>
                                       <div className="spec-box">
                                            <label for="aemail">Email</label><br />
                                            <input placeholder='imanverd1ev@gmail.com' type="email" id="aemail" />
                                       </div>
                                       <div className="spec-box">
                                           <label for="phone">Phone</label><br />
                                           <input placeholder='12345678' type="phone" id="phone" />
                                       </div>
                                       <div className="spec-box">
                                           <label for="company">Company</label><br />
                                           <input placeholder='DigitalHands' type="text" id="company" />
                                       </div>
                                       <div className="spec-box">
                                           <label for="messagge">Messagge</label><br />
                                           <textarea placeholder='Type Your messagge here' type="text" id="messagge"></textarea>
                                       </div>
                                       <div className="spec-box spec-box-btn">
                                            <input className='button' type="submit" value="Müraciet et" />
                                             <i class="fa-solid fa-arrow-right"></i>
                                       </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <PageFooter/>
            </section>
        </>

    )
}
