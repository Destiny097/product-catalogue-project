import { useState } from 'react'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import '../src/index.css'
import BestSellers from './pages/BestSellers'
import Sustainabilty from './components/Sustainabilty'
import Collection from './components/Collection'
function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <BestSellers/>
      <Collection/>
      <Sustainabilty/>
      <Footer/>
    </div>
  )
}

export default App
