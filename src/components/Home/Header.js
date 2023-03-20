import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//i images
import Logo from '../assets/Logo1.png';

const Header = () => {
  return <header className='py-8' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' className="h-11"/>
        </Link>
        {/* button */}
        <div className='flex justify-center items-center'>
        <Link to="./Contact/Contacter" className='btn btn-sm mr-10 self-center'>
            Contactez moi
        </Link>
        <Link to="./Route1/Bonus" className='btn btn-sm self-center'>
            Csdffsdfds
        </Link>
        <Outlet />
        </div>
      </div>
    </div>;
    </header>
};

export default Header;
