import React from 'react'
import Logo from '../assets/Logo1.png';
import {FaGithub, FaLinkedinIn, FaWordpressSimple } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
    <div className='container flex flex-col items-center 
    justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row'>
        <a href="#">
            <img className='w-auto h-7' src={Logo} alt="" />
        </a>

        <p className='text-sm text-gray-600 dark:text-gray-300'>© Copyright 2021. All Rights Reserved.</p>

        <div className='flex -mx-2'>
        

        <a href="https://www.linkedin.com/in/hamza-idbouiguiguane/">
              <FaLinkedinIn />
              </a>
        <a href="https://github.com/Hamzaidb">
              <FaGithub />
              </a>
        <a href="https://idbouiguiguane.alwaysdata.net/">
              <FaWordpressSimple />
              </a>
        
        </div>
    </div>
</footer>
  )
}
