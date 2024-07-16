import React, { useEffect } from 'react';

import Penus from '/penus.png';
import User from '/user.png';

const Head: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.classList.toggle('backdrop-blur', window.scrollY > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-transparent transition-all duration-600 ease-in-out sticky top-0 w-full z-50 p-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="">
          <img src={Penus} alt="Logo" className="w-16" />
        </a>
        <h3 className='text-3xl font-bold text-putih-putih'>
          SMK <span className='text-merah-penus'>PLUS</span> PELITA NUSANTARA
        </h3>
        <div className='relative group flex flex-col items-center h-auto w-auto'>
  <img src={User} id='showNav' className='rounded-full cursor-pointer' alt='user' />
  <aside className='flex flex-col overflow-hidden bg-putih-putih max-h-0 top-14 rounded-lg absolute group-hover:max-h-60 group-hover:p-3 duration-500 transition-all ease-in-out'>
    <ul className='text-laut-dalam'>
      <li className='w-full text-center ' key="username">Username</li>
      <li className='w-full text-center border-b-2' key="kelas">Kelas</li>
      <li className='w-full text-center ' key="logout">Logout</li> 
    </ul>
  </aside>
</div>

      </div>
    </nav>
  );
};

export default Head;
