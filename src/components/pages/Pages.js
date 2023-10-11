import React from 'react'
import Header from '../common/Header'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
  

export default function Pages() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}
