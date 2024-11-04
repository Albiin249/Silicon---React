import React from 'react'
import Showcase from '../components/Showcase'
import Logos from '../components/Logos'
import Features from '../components/Features'
import Howdoesitwork from '../components/Howdoesitwork'
import MoneyTransfer from '../components/MoneyTransfer'
import Recensions from '../components/Recensions'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Testimonials from '../components/Recensions'


function Home() {
    return (
        <div className="wrapper">
            < Showcase />
            < Logos />
            < Features />
            < Howdoesitwork />
            < MoneyTransfer />
            < Testimonials />
            < Faq />
            < Footer />
        </div>
    )
}

export default Home