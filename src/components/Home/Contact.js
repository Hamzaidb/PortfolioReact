import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

import { Link } from 'react-router-dom';

import {FaGithub, FaLinkedinIn, FaWordpressSimple } from 'react-icons/fa'


import Form from './Form'


const Contact = () => {
  return ( 
  
  <section className='py-16 lg:section' id='contact'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* text */}
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className='flex-1 flex justify-start items-center '>
        <div>
         <h4 className='text-xl uppercase text-acc
          font-medium mb-2 tracking-wide'> Mon profil vous intéresse ?</h4>
          <h2 className='text-[45px] lg:text-[90px]
          leading-none mb-12'>
            Contactez<br /> moi!</h2>
        </div>
      </motion.div>
      {/* form*/}
      <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 justify-start items-center'>
          
          <p className='mb-6'>
          À travers mon adresse mail : hamza.idblhy@gmai.com <br />
          ou avec mon compte <a href="https://www.linkedin.com/in/hamza-idbouiguiguane/"> 
  LinkedIn </a><a href="https://www.linkedin.com/in/hamza-idbouiguiguane/">
              <FaLinkedinIn />
              </a>
          </p>

          
          
      </motion.div>
      
    </div>
   </div>
   
   </section>
  );
};

export default Contact;
