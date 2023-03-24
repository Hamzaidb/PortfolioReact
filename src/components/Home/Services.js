import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description:
    'dzjedzoezjiizdjoideojiziojzodojedoezzejodj',
  },
  {
    name: 'Development',
    description:
    'dzjedzoezjiizdjoideojiziojzodojedoezzejodj',
  },
  {
    name: 'Bdd',
    description:
    'dzjedzoezjiizdjoideojiziojzodojedoezzejodj',
  },
  {
    name: 'Digital',
    description:
    'dzjedzoezjiizdjoideojiziojzodojedoezzejodj',
  },
]

const Services = () => {
  return (
  
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
      {/* txt img */}
      <motion.div 
      variants={fadeIn('right', 0.6)}
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once: false, amount: 0.7 }}
      className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>Mes compétences</h2>
        <h3 className='h3 max-w-[455px] mb-16'>
          zdzkzdokzokdopezo deopdedz pokekoez
        </h3>
        <button className='btn btn-sm'>cdcd</button>
      </motion.div>
      {/* services */}
      <motion.div 
      variants={fadeIn('left', 0.6)}
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once: false, amount: 0.7 }}
      className='flex-1'>
        {/* competence list */}
        <div>
          {services.map((service, index)=> {
            // destructure servicce
            const {name, description} = service;
            return (
                <div className='border-b border-white/20
                h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px]
                    tracking-wider font-primary
                    font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary
                    leading-tight'>{description}</p>
                  </div>
                
                </div>
            );
            
          })}
        </div>
      </motion.div>
      </div>
    </div>


    </section>
  );
};

export default Services;
