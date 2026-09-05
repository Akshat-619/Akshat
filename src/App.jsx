import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Toolkit from './sections/Toolkit'
import Builds from './sections/Builds'
import Journey from './sections/Journey'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-body-bg'>
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