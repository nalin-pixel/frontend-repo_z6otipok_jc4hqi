import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Projects from './components/Projects'
import Team from './components/Team'
import Join from './components/Join'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-white">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Projects />
      <Team />
      <Join />
      <Footer />
    </div>
  )
}

export default App
