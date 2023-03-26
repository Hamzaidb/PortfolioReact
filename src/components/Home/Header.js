import React from 'react';
import { Outlet } from 'react-router-dom';
//i images
import Logo from '../assets/Logo1.png';

import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
          <img src={Logo} alt='' className="h-11"/>
        {/* button */}
        <div className='flex justify-center items-center'>
        <Link
      to='contact'
      className='btn btn-sm mr-10 self-center'>
            Contactez moi
            </Link>
        
        </div>
      </div>
    </div>
    </header>
};

export default Header;
