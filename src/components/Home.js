import React from 'react'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import Highlights from './Highlights'
import Testemonials from './Testemonials'

const Home = () => {
  return (
      <div>
      <Hero />
      <Highlights />
      <Testemonials />
      <About />
      <Footer />
    </div>
  )
}

export default Home