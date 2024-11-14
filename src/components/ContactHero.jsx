import React from 'react'
import Email from '/src/assets/images/email.svg'
import Career from '/src/assets/images/career.svg'
import Arrow from '/src/assets/images/arrow-blue.svg'
import home from '/src/assets/images/home.svg'
import chevRight from '/src/assets/images/chevrons-right.svg'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



function ContactHero() {
  return (
    <div className="contact-fp">

      <div className="container">
        <Navbar />
        <div className="undermeny">
          <NavLink to="/home" className="homepage-text"> <img src={home}></img>Homepage</NavLink>
          <img src={chevRight} alt="" />
          <NavLink to="/contact" className="contact-text">Contact</NavLink>
        </div>

        <h2 className="rubrik contact-rubrik">Contact Us</h2>
        <div className="email">
          <img src={Email} alt="Icon for Email" />
          <div className="text-box">
            <h3 className="rubrik">Email us</h3>
            <span className="body-m">Please feel free to drop us a line. We will respond as soon as possible.</span>
            <Link href="#">Leave a message<img src={Arrow}></img></Link>
          </div>
        </div>
        <div className="career">
          <img src={Career} alt="Icon for Career" />
          <div className="text-box">
            <h3 className='rubrik'>Careers</h3>
            <span className="body-m">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</span>
            <Link href="#">Send an application<img src={Arrow}></img></Link>
          </div>
        </div>

        < ContactForm />
      </div>
    </div>
  )
}

export default ContactHero