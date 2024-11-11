import React from 'react'
import Email from '/src/assets/images/email.svg'
import Career from '/src/assets/images/career.svg'
import Arrow from '/src/assets/images/arrow-blue.svg'
import home from '/src/assets/images/home.svg'
import chevRight from '/src/assets/images/chevrons-right.svg'
import Navbar from './Navbar'
import ContactForm from './ContactForm'

function ContactHero() {
  return (
    <div className="contact-fp">

      <div className="container">
        <Navbar />
        <div className="undermeny">
          <a href="/home" className="homepage-text"> <img src={home}></img>Homepage</a>
          <img src={chevRight} alt="" />
          <a href="/contact" className="contact-text">Contact</a>
        </div>

        <h2 className="rubrik contact-rubrik">Contact Us</h2>
        <div className="email">
          <img src={Email} alt="Icon for Email" />
          <div className="text-box">
            <h3 className="rubrik">Email us</h3>
            <span className="body-m">Please feel free to drop us a line. We will respond as soon as possible.</span>
            <a href="#">Leave a message<img src={Arrow}></img></a>
          </div>
        </div>
        <div className="career">
          <img src={Career} alt="Icon for Career" />
          <div className="text-box">
            <h3 className='rubrik'>Careers</h3>
            <span className="body-m">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</span>
            <a href="#">Send an application<img src={Arrow}></img></a>
          </div>
        </div>

        < ContactForm/>
      </div>
    </div>
  )
}

export default ContactHero