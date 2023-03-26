import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/cartejs.jpg';
import Img2 from '../assets/crud.jpg';
import Img3 from '../assets/webdoc.jpg';
import Img4 from '../assets/openspirit.png';

import { useState } from "react";
import Footer from './Footer';





export default function Portfolio() {
  return (
    <section>
    
    <header className='py-8' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to="/PortfolioReact">
      <img src={Logo} alt="" className="h-11" />
    </Link>
          
        {/* button */}
        <div className='flex justify-center items-center'>
        <Link
      to='/PortfolioReact'
      className='btn btn-sm mr-10 self-center'>
            Contact me
            </Link>
        
        </div>
      </div>
    </div>;
    </header>

    <section>
    <div className='container px-6 py-10 mx-auto'>
        <h1 className='h2 text-center leading-tight text-accent'>
        Latest Work
        </h1>


        

        <section className='mt-8 space-y-8 lg:mt-12'>
            <section className='lg:flex lg:items-center'>
                <div className='lg:w-1/2'>
                    <p className='text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400'>
                        Projet universitaire</p>
                    <h2 className='mt-1 text-2xl font-semibold
                     text-gray-800 capitalize dark:text-white'> Une application interactive en Javascript</h2>
                    
                    <p className='mt-5'>Projet en groupe consistant à réaliser un site mettant en avant une carte interactive, avec l'API de Leaflet</p>
<p className='mt-2'>Langage utilisé : HTML, CSS,  Javascript</p>
<p className='mt-2'>Logiciel utilisé : Visual Studio Code </p>

<p className='mt-2'>Lien du site : https://hamzaidb.github.io/SAE-303/index.html</p>
            
                </div>

                <div className='mt-4 lg:w-1/2 lg:mt-0'>
                    <img className='object-cover w-full h-64 rounded-lg md:h-96'
                        src={Img1}
                        alt="" />
                </div>
            </section>

            <section className='lg:flex lg:items-center'>
                <div className='lg:w-1/2'>
                    <p className='text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400'>Projet universitaire</p>
                    <h2 className='mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white'>
                        Conception d'une agence et sa communication</h2>
                        <p className='mt-5'>Projet intégrateur de fin de première année où nous avons réalisé une agence de communication ainsi que son identité visuelle, un court métrage promotionnel, sa stratégie de communication ainsi qu'un site web Wordpress.</p>

<p className='mt-2'>Logiciel utilisé : Adobe InDesign, Adobe Premiere Pro, Adobe Illustrator, Wordpress </p>

<p className='mt-2'>Lien du site : https://hamzaidb.github.io/SAE-303/index.html</p>
                </div>

                <div className='mt-4 lg:w-1/2 lg:mt-0'>
                    <img className='object-cover w-full h-64 rounded-lg md:h-96'
                        src={Img4}
                        alt="" />
                </div>
            </section>

            <section className='lg:flex lg:items-center'>
                <div className='lg:w-1/2'>
                    <p className='text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400'>Projet universitaire</p>
                    <h2 className='mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white'>
                        Back-office (CRUD) en PHP </h2>
                        <p className='mt-5'>Projet consistant à dynamiser et connecter un site web avec une base de données et réaliser un espace administration (un CRUD) permettant de pouvoir modifier les données</p>
<p className='mt-2'>Langage utilisé : HTML, CSS,  Javascript, PHP, MySQL</p>
<p className='mt-2'>Logiciel utilisé : Visual Studio Code </p>


                </div>


                <div className='mt-4 lg:w-1/2 lg:mt-0'>
                    <img className='object-cover w-full h-64 rounded-lg md:h-96'
                        src={Img2}
                        alt="" />
                </div>
            </section>

            <section className='lg:flex lg:items-center'>
                <div className='lg:w-1/2'>
                    <p className='text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400'>UX/UI Design, Production audiovisuelle, Création numérique, Développement</p>
                    <h2 className='mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white'>
                        Réalisation d'un Webdocumentaire</h2>
                        <p className='mt-5'>Projet universitaire ayant pour but de réaliser un Webdocumentaire autour de la formation du BUT MMI à l'IUT de Cergy Pontoise. Nous devions réaliser l'arborescence, une maquette intéractive, l'identité visuelle, la production et le montage des vidéos du Webdocumentaire</p>
<p className='mt-2'></p>
<p className='mt-2'>Logiciel/application utilisé : Klynt, Figma, Adobe InDesign, DaVinci Resolve</p>
                        
                </div>

                <div className='mt-4 lg:w-1/2 lg:mt-0'>
                    <img className='object-cover w-full h-64 rounded-lg md:h-96'
                        src={Img3}
                        alt="" />
                </div>
            </section>

            <Footer />
        </section>
    </div>
</section>
</section>
  )
}
