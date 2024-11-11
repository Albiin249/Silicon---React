import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import Map from '../components/Map'

function Contact() {
  return (
    <div className="wrapper">
      < ContactHero />
      < Map />
      < Footer />
    </div>
  )
}

export default Contact