import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import {fadeIn} from '../variants';



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return ( 
  <section className="container mx-auto" id='about' ref={ref}>
    <div className = 'container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row
      lg:items-center lg:gap-x-20 lg:gap-y-0-h-screen'>

        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className ='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
mix-blend-lighten bg-top'></motion.div>

        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I'm a Freelance front end devdsdsq
          </h3>
          <p className='mb-6'>
          Étudiant en 2ème année du BUT MMI parcours Développement Web 
          et dispositifs interactifs à L’IUT de Cergy Pontoise, 
          j’ai pour vocation de me diriger vers le métier de Développeur Web.
          Passionné des arts visuels et du développement informatique. 
          J’ai décidé de poursuivre mes études en BUT MMI.
          </p>

          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contactez moi</button>
            <a href="#" className='text-gradient btn-link'>
              Mon portfolio
            </a>
          </div>
      </motion.div>
      </div>
      </div>
  </section>
  );
};

export default About;
