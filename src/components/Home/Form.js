import { useState } from "react";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";



export const Form = () => {
    const formInitialDetails = {
        Name: '',
        email: '',
        message: '',
    };


    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        const db = getFirestore();
        await addDoc(collection(db, "contact"), formDetails);
        let response = await fetch("https://portfolio-app-d8044.firebaseio.com/contact.json", {
            method:"POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus({ success: false, message: 'Someting went wrong, please try again'})
        }
};

    return (
        <motion.form 
        variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className='flex-1 border rounded-2xl flex flex-col gap-y-6
      pb-24 p-6 items-start'
        onSubmit={handleSubmit}>

        <input 
        className='bg-transparent border-b 
        py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' 
        type="text" 
        value={formDetails.Name}
        onChange={(e) => onFormUpdate('Name', e.target.value)}
        placeholder='name'/>
        

        <input 
        className='bg-transparent border-b 
        py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' 
        type="email" 
        value={formDetails.email}
        onChange={(e) => onFormUpdate('email', e.target.value)}
        placeholder='email'/>
        

        <textarea 
        className='bg-transparent border-b 
        py-12 outline-none w-full placeholder:text-white
        focus:border-accent transition-all
        resize-none mb-12'
        value={formDetails.message}
        onChange={(e) => onFormUpdate('message', e.target.value)}
        placeholder='message' name='message'></textarea>
        
        <button className='btn btn-lg' 
        type="submit">
            {buttonText}
        </button>
        
        { status.message &&
        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>}

        </motion.form>
    )
}

export default Form;