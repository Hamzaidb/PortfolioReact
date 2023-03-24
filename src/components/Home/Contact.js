import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'


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
          font-medium mb-2 tracking-wide'> Get in touch</h4>
          <h2 className='text-[45px] lg:text-[90px]
          leading-none mb-12'>
            Let's work<br /> Together!</h2>
        </div>
      </motion.div>
      {/* form*/}
      <Form />
    </div>
   </div>
   
   </section>
  );
};

export default Contact;
