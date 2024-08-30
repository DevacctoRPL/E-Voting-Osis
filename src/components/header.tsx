import React, { useContext, useEffect, useState } from 'react';

import Penus from '/penus.png';
import User from '/user.png';
import Logout from '/logout.png';
import { UserContext } from '../context/userContext';
import { Navigate } from 'react-router-dom';


const Head: React.FC = () => {
  const user = useContext(UserContext)
  if (!user?.user) {
    return <Navigate to="/" />
  }
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
    <nav className="bg-transparent transition-all duration-600 ease-in-out sticky top-0 w-full z-50 p-2 border-b-[1px] border-slate-700/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/landpage" className="">
          <img src={Penus} alt="Logo" className="w-16" />
        </a>
        <h3 className='text-3xl font-bold text-putih-putih'>
          SMK <span className='text-merah-penus'>PLUS</span> PELITA NUSANTARA
        </h3>
        <div className='relative group flex flex-col items-center h-auto w-auto'>
          <img src={User} id='showNav' className='rounded-full cursor-pointer' alt='user' />
          <aside className='flex flex-col items-center overflow-hidden bg-putih-putih max-h-0 top-14 rounded-xl absolute group-hover:max-h-60 group-hover:px-6 group-hover:py-2 duration-500 transition-all ease-in-out'>
            <p className="font-bold">{user?.user?.Nama}</p>
            <hr className="w-[130%] border border-black mb-2" />
            <div className="flex w-[140%] items-center gap-2 hover:cursor-pointer">
              <img src={Logout} alt="" className="w-[20%] scale-x-[-1]" />
              <p onClick={() => setFetch(true)}>Logout</p>
            </div>
          </aside>
        </div>
      </div>
    </nav>
  );
};

export default Head;
