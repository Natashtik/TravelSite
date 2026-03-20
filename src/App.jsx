import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import CourseProgram from './components/CourseProgram'
import WhySpecial from './components/WhySpecial'
import WhatNeeded from './components/WhatNeeded'
import Schedule from './components/Schedule'
import Price from './components/Price'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'for-whom', label: 'Для кого' },
    { id: 'program', label: 'Программа' },
    { id: 'why-special', label: 'Особенности' },
    { id: 'what-needed', label: 'Что нужно' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'price', label: 'Стоимость' },
  ]

  return (
    <>
      <Header 
        navItems={navItems} 
        scrollToSection={scrollToSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <ForWhom />
        <CourseProgram />
        <WhySpecial />
        <WhatNeeded />
        <Schedule />
        <Price />
        <FinalCTA />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </>
  )
}

export default App
