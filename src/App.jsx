import React from 'react'
import './css/main.css'

import Showcase from './components/Showcase'
import Navbar from './components/Navbar'
import Logos from './components/Logos'
import Features from './components/Features'
import Howdoesitwork from './components/Howdoesitwork'
import MoneyTransfer from './components/MoneyTransfer'
import Recensions from './components/Recensions'
import Faq from './components/Faq'
import Footer from './components/Footer'


function App() {
  return (
    <div className="wrapper">
      < Showcase />
      < Logos />
      < Features />
      < Howdoesitwork />
      < MoneyTransfer />
      < Recensions />
      < Faq />
      < Footer />
    </div>
  )
}

export default App