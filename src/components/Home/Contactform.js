import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Contactform = () =>  {
    const [state, handleSubmit] = useForm("xnqyboep");
    if(state.succeeded) {
        return <p>Merci pour votre message</p>;
    }
    return (
        <motion.form 
        variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className='flex-1 border rounded-2xl flex flex-col gap-y-6
      pb-24 p-6 items-start'
        method="POST"
        on Submit={handleSubmit}>

        <input 
        className='bg-transparent border-b 
        py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' 
        type="text" placeholder='name' name='name'/>
        

        <input 
        className='bg-transparent border-b 
        py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' 
        type="email" placeholder='email' name='_replyto'/>
        

        <textarea 
        className='bg-transparent border-b 
        py-12 outline-none w-full placeholder:text-white
        focus:border-accent transition-all
        resize-none mb-12'
        placeholder='message' name='message'></textarea>
        
        <button className='btn btn-lg' type="submit" disabled={state.submitting}>
            Submit
        </button>
        <ValidationError errors={state.errors} />
        </motion.form>
    );
}

export default Contactform;