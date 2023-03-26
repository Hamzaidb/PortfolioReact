import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import {fadeIn} from '../variants';

import { Link } from 'react-scroll';



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
        className ='flex-1 bg-contain bg-no-repeat h-[640px]
mix-blend-lighten bg-top'></motion.div>

        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1'>
          <h2 className='h2 text-accent'>À propos</h2>
          <h3 className='h3 mb-4'>
            Futur Développeur Web
          </h3>
          <p className='mb-6'>
          Étudiant en 2ème année du BUT MMI parcours Développement Web 
          et dispositifs interactifs à L’IUT de Cergy Pontoise, 
          j’ai pour vocation de me diriger vers le métier de Développeur Web.<br />
          Je suis à la recherche d'un stage en Développement Web débutant à partir du 17 avril 2023 et d'une durée au minimum 10 semaines <br />
          Passionné des arts visuels et du développement informatique, j’ai décidé de poursuivre mes études en BUT MMI.
          </p>

          <div className='flex gap-x-8 items-center'>
          <a href="https://drive.google.com/file/d/1KDJHxogzd8i0nPT-TcGR7mbCTENtWcBZ/view?usp=sharing" 
          class="text-gradient btn-link">Télécharger le CV</a>

      <Link 
      to='work' 
      className='text-gradient btn-link'>
              Mon portfolio
            </Link>
          </div>
      </motion.div>
      </div>
      </div>
  </section>
  );
};

export default About;
