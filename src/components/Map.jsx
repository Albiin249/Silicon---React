import React from 'react'
import map from '/src/assets/images/map.svg'
import destination from '/src/assets/images/destination.svg'
import phone from '/src/assets/images/bx-phone.svg'
import clock from '/src/assets/images/clock.svg'

import facebook from '/src/assets/images/facebook.svg'
import twitter from '/src/assets/images/twitter.svg'
import instagram from '/src/assets/images/instagram.svg'
import youtube from '/src/assets/images/youtube.svg'

function Map() {
    return (
        <>
            <div className="container">
                <div className="second-page-con">
                    <div className='map'>
                        <img src={map} alt="" />
                    </div>
                    <div className='location-info'>
                        <div className="med-1">
                            <h2 className='rubrik'>Medical Center 1</h2>
                            <p className='body-m'> <img src={destination} alt="Destination Icon" /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className='body-m'> <img src={phone} alt="Phone Icon" /> (406) 555-0120</p>
                            <section className='body-m times'>
                                <img src={clock} alt="Clock Icon" className="clock" />
                                <div className="schedule">
                                    <span className="days"><strong>Mon – Fri: </strong> 9:00 am – 22:00 am</span>
                                    <span className="days"><strong>Sat – Sun: </strong> 9:00 am – 20:00 am</span>
                                </div>
                            </section>
                        </div>
                        <div className="med-2">
                            <h2 className='rubrik'>Medical Center 2</h2>
                            <p className='body-m'> <img src={destination} alt="Destination Icon" /> 2464 Royal Ln. Mesa,New Jersey 45463</p>
                            <p className='body-m'><img src={phone} alt="Phone Icon" /> (406) 544-0123</p>
                            <section className='body-m times'>
                                <img src={clock} alt="Clock Icon" className="clock" />
                                <div className="schedule">
                                    <span className="days"><strong>Mon – Fri: </strong> 9:00 am – 22:00 am</span>
                                    <span className="days"><strong>Sat – Sun: </strong> 9:00 am – 20:00 am</span>
                                </div>
                            </section>

                        </div>
                        <div className="social-media">
                            <a className="box-2" href="https://www.facebook.com" target="_blank"><img src={facebook} alt="Facebook Icon" /></a>
                            <a className="box-2" href="https://www.twitter.com" target="_blank"><img src={twitter} alt="Twitter Icon" /></a>
                            <a className="box-2" href="https://www.instagram.com" target="_blank"><img src={instagram} alt="Instagram Icon" /></a>
                            <a className="box-2" href="https://www.youtube.com" target="_blank"><img src={youtube} alt="Youtube Icon" /></a>
                        </div>
                    </div>



                </div>
            </div>
        </>

    )
}

export default Map