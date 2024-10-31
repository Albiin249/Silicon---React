import React from 'react'

import phone from '/src/assets/images/phone.svg'
import message from '/src/assets/images/message.svg'
import blueArrow from '/src/assets/images/arrow-blue.svg'
import greenArrow from '/src/assets/images/arrow-green.svg'

import bell from '/src/assets/images/bell.svg'
import envelope from '/src/assets/images/bx-envelope.svg'
import envelopeDark from '/src/assets/images/bx-envelope-darkmode.svg'

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
                                    <a href="#">Contact us<img src={blueArrow} /></a>
                                </div>
                                <div className="message box-4">
                                    <img src={message} alt="Message-bubble" />
                                    <p className="body-s">Don't like phone calls?</p>
                                    <a href="#">Contact us<img src={greenArrow} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="info-lista">
                            <details>
                                <summary className="rubrik">Is any of my personal information stored in the App?</summary>
                                <p className="body-s">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra
                                    aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et
                                    consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non.
                                    Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida
                                    adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt
                                    suspendisse ut consequat.</p>
                                <p className="body-s">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor,
                                    faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam
                                    auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                    Dignissim amet adipiscing massa integer</p>
                            </details>
                            <details>
                                <summary className="rubrik">What formats can I download my transaction history in?</summary>
                                <p className="body-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                    eligendi similique delectus ipsum tempore culpa asperiores debitis, eveniet libero
                                    ipsam natus non quidem nulla. Nihil quae velit aut soluta veritatis?</p>
                            </details>
                            <details>
                                <summary className="rubrik">Can I schedule future transfers?</summary>
                                <p className="body-s">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra
                                    aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et
                                    consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non.
                                    Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida
                                    adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt
                                    suspendisse ut consequat.</p>
                            </details>
                            <details>
                                <summary className="rubrik">When can I use Banking App services?</summary>
                                <p className="body-s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
                                    blanditiis?</p>
                            </details>
                            <details>
                                <summary className="rubrik">Can I create my own password that is easy for me to remember?
                                </summary>
                                <p className="body-s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
                                    sapiente debitis reiciendis facilis? Nostrum fugit illum numquam. Aspernatur quas
                                    aperiam autem odio, eum quia nesciunt eveniet, officia, esse soluta nulla mollitia
                                    sapiente dolores. Harum, sapiente?</p>
                            </details>
                            <details>
                                <summary className="rubrik">What happens if I forget or lose my password?</summary>
                                <p className="body-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                                    perspiciatis. Deleniti dolorem voluptatem rerum temporibus laboriosam inventore
                                    saepe aliquid dicta ut. Tenetur eaque a ut facilis reprehenderit at!</p>
                            </details>

                        </div>

                        <div className="btn-contact">
                            <button className="btn contact-btn">Contact us now</button>
                        </div>

                        <div className="contact-boxes contact-boxes-tablet">
                            <div className="phone box-4">
                                <img src={phone} alt="Phone" />
                                <p className="body-s">Still have questions?</p>
                                <a href="#">Contact us<img src={blueArrow} /></a>
                            </div>
                            <div className="message box-4">
                                <img src={message} alt="Message-bubble" />
                                <p className="body-s">Don't like phone calls?</p>
                                <a href="#">Contact us<img src={greenArrow} /></a>
                            </div>
                        </div>



                        <footer className="subscribe">
                            <div className="bell-text">
                                <img className="bell" src={bell} alt="Notification Bell" />
                                <h3 className="desktop-h3 rubrik">Subscribe to our newsletter to stay<br />informed about
                                    latest updates</h3>
                                <h3 className="mobile-h3 rubrik">Subscribe to our<br />newsletter</h3>
                            </div>
                            <div className="input-grp">
                                <img className="email-icon show-light" src={envelope} alt="mail icon" />
                                <img className="email-icon show-dark" src={envelopeDark}
                                    alt="mail icon" />
                                <input className="form-input" type="email" placeholder="Your Email" />
                                <button className="knappen">Subscribe</button>
                            </div>

                        </footer>

                    </section>

                </main>

            </div>


        </div>
  )
}

export default Faq