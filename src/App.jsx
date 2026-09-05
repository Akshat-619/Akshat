import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Toolkit from './sections/Toolkit'
import Builds from './sections/Builds'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div className='min-h-screen cursor-none bg-body-bg'>
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Toolkit/>
      <Builds/>
      <Journey/>
      <Contact/>
    </div>
  )
}

export default App