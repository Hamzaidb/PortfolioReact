import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const services = [
  {
    name: 'Développement Front',
    description:
    'Réaliser un site web responsive et interactif avec HTML, CSS et Javascript. Réaliser un site web Wordpress. Concevoir une application React',
  },
  {
    name: 'Développement Back et Base de données',
    description:
    'Créer, gérer et exploiter une base de données avec MySQL et phpmyadmin. Dynamiser un site web avec PHP',
  },
  {
    name: 'UX/UI Design',
    description:
    'Concevoir une expérience utilisateur optimale et une interface répondant aux besoins des utilisateurs',
  },
  {
    name: 'Création numérique',
    description:
    'Réaliser des montages (photo et vidéo), des graphiques et des illustrations avec la suite Adobe. Produire une identité visuelle',
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
      className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>Mes compétences</h2>
        <h3 className='h3 max-w-[455px] mb-16'>
          J'ai un profil polyvalent pouvant exercer dans plusieurs domaines.
        </h3>

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
