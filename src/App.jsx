import React from 'react'
import '../css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import { DarkModeProvider } from './components/DarkModeContext';
import DarkModeToggle from './components/Darkmode';


function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={< Home />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  )
}

export default App

