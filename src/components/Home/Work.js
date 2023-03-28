import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/cartejs.jpg';
import Img2 from '../assets/landing.jpg';
import Img3 from '../assets/crud.jpg';

import { Link, Outlet } from 'react-router-dom';
import Portfolio from './Portfolio';

const Work = () => {
  return (
  
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row
      gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10
        lg:mb-0'>
          {/* text */}
          <div>
              <h2 className='h2 leading-tight text-accent'>
              Mes derniers  <br />
              travaux
              </h2>
              <p className='max-w-sm mb-16'>
                Voici quelques exemples de mes travaux. <br />
                Cliquez sur le bouton ci-dessous pour en savoir plus.
              </p>
              <Link
              to= "/Portfolio"
              className='text-gradient btn-link'>En savoir plus
              </Link>
          </div>
          
          {/* image */}
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all
             duration-300'>

             </div>
            {/* img */}
            <img className='group-hover:scale-125 
            transition-all duration-500' 
            src={Img3} 
            alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
              Développement Back, Base de données, Front</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all 
            duration-700 z-50'>
              <span className='text-3xl text-white'>Back-Office/CRUD en PHP</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-10'>
          {/* img */}
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all
             duration-300'>

             </div>
            {/* img */}
            <img className='group-hover:scale-125 
            transition-all duration-500' 
            src={Img1} 
            alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
              Développement Front</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all 
            duration-700 z-50'>
              <span className='text-3xl text-white'>Application intéractive en Javascript</span>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all
             duration-300'>

             </div>
            {/* img */}
            <img className='group-hover:scale-125 
            transition-all duration-500' 
            src={Img2} 
            alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
              UI/UX design, Développement Front</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-6 transition-all 
            duration-700 z-50'>
              <span className='text-3xl text-white'>Intégration d'une landing page<br /> intéractive</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  
  </section>
  );
};

export default Work;
