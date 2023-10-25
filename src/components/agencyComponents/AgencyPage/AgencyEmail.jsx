import React from 'react'

export default function AgencyEmail() {
    return (<>
        <section id='agencyemail'>
            <div className="container-fluid">
                <h2>Let us know what you think!</h2>
                <p>Lorem Ipsum is simply dummy text of the and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard </p>
                <div className="row">
                    <div className="back-top"></div>
                    <div className="email-box">
                        <form action="/action_page.php">
                            <label htmlFor="name">Name</label><br />
                            <input placeholder='Emin' type="text" id="name" /><br />
                            <label htmlFor="email">Email</label><br />
                            <input placeholder='imanverd1ev@gmail.com' type="email" id="email" /><br />
                            <label htmlFor="phone">Phone</label><br />
                            <input placeholder='12345678' type="phone" id="phone" /><br />
                            <div className='sub-box'>
                                <input className='button' type="submit" value="Email" />
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>

    )
}
