import React from 'react'
//import {Routes, Route} from "react-router-dom"
// components
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';

export default function Home() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  )
}
