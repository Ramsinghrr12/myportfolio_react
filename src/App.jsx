import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './About/About'
import Services from './components/services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

 const App  = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact />
      <Footer/>
       </div>
  )
}

export default App;
