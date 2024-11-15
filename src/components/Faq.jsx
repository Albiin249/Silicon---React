import React from 'react'
import FaqLista from './FaqLista'
import SubscribeForm from './SubscribeForm'

import phone from '/src/assets/images/phone.svg'
import message from '/src/assets/images/message.svg'
import blueArrow from '/src/assets/images/arrow-blue.svg'
import greenArrow from '/src/assets/images/arrow-green.svg'

import { Link } from 'react-router-dom'




function Faq() {
    return (
        <div className="sixth-page">
            <div className="container">
                <main id="faq">
                    <section className="questions">

                        <div className="questions-2">
                            <h2 className="rubr /ik mobile-h2">Any questions? Check out<br />the FAQs</h2>
                            <h2 className="rubr /ik desktop-tablet-h2">Any questions?<br />Check out the FAQs</h2>
                            <p className="mobile-p body-l">Still have unanswered questions and need<br />to get in touch?</p>
                            <p className="desktop-tablet-p body-l">Still have unanswered questions and need to get<br />in
                                touch?</p>

                            <div className="contact-boxes contact-boxes-desktop">
                                <div className="phone box-4">
                                    <img src={phone} alt="Phone" />
                                    <p className="body-s">Still have questions?</p>
                                    <Link to="/contact">Contact us<img src={blueArrow} /></Link>
                                </div>
                                <div className="message box-4">
                                    <img src={message} alt="Message-bubble" />
                                    <p className="body-s">Don't like phone calls?</p>
                                    <Link to="/Contact">Contact us<img src={greenArrow} /></Link>
                                </div>
                            </div>
                        </div>

                        < FaqLista />

                        <div className="btn-contact">
                            <Link to="/contact" className="btn contact-btn">Contact us now</Link>
                        </div>

                        <div className="contact-boxes contact-boxes-tablet">
                            <div className="phone box-4">
                                <img src={phone} alt="Phone" />
                                <span className="body-s">Still have questions?</span>
                                <Link to="/contact">Contact us<img src={blueArrow} /></Link>
                            </div>
                            <div className="message box-4">
                                <img src={message} alt="Message-bubble" />
                                <span className="body-s">Don't like phone calls?</span>
                                <Link to="/contact">Contact us<img src={greenArrow} /></Link>
                            </div>
                        </div>



                        < SubscribeForm />

                    </section>

                </main>

            </div>


        </div>
    )
}

export default Faq