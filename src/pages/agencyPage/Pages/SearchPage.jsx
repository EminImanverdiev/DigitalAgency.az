import React from 'react'
import Navbar from '../../../components/agencyComponents/Navbar/Navbar'
import RespNavbar from '../../../components/agencyComponents/RespNavbar/RespNavbar';
import '../../../components/agencyComponents/SearchPage/Search.css'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'
export default function SearchPage() {
    return (
        <section className='search'>
            <div id='search'>
                <div id="searchheader">
                    <RespNavbar />
                    <Navbar />
                    <div className="header-content">
                        <h6>Ready. Set. Wireframe.</h6>
                        <div className="content-inp">
                            <input type="text" placeholder='Search' />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 col-md-6" style={{backgroundImage:`url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`}}>
                            <a href="#">View Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="col-xxl-4 col-md-6" style={{backgroundImage:`url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`}}>
                            <a href="#">View Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="col-xxl-4 col-md-6" style={{backgroundImage:`url("https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg")`}}>
                            <a href="#">View Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        
                    </div>
                </div>
                <div className="box-all">
                    <a href="#" className='all-chosen'>See More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
                <PageFooter/>
        </section>

    )
}
