import React from 'react';
import {Routes, Route} from "react-router-dom"
/*
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
*/
import Home from "./components/Home/Home"


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Routes>
        <Route path="/PortfolioReact" element={<Home />} />
      </Routes>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
