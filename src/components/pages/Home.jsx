import React from 'react'
import Benner from '../layouts/Benner'
import Technology from '../layouts/Technology'
import About from '../layouts/About'

import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'


const Home = () => {
  return (
   <>
   <Benner/>
   <About/>
   <Technology/>
   <Projects/>
   <Contact/>
   </>
  )
}

export default Home