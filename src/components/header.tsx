import React, { useContext, useEffect } from 'react';

import Penus from '/penus.png';
import User from '/user.png';
import Logout from '/logout.png';
import { UserContext } from '../context/userContext';

const Head: React.FC = () => {
  const { user } = useContext(UserContext)
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
          <aside className='flex flex-col overflow-hidden bg-putih-putih max-h-0 top-14 rounded-3xl absolute group-hover:max-h-60 group-hover:px-8 group-hover:py-2 duration-500 transition-all ease-in-out'>
            <ul className='text-laut-dalam'>
              <li className='w-full text-center m-1 text-black font-bold' key="username"><a href="#">{user.Nama}</a></li>
              <li className='w-full text-center m-1 text-gray-400 font-bold' key="kelas"><a href="#">Kelas</a></li>
              <hr className='border-black' />
              <li className='w-full text-center m-1' key="logout"><a href="#" className='flex items-center'> <img src={Logout} className='w-4 h-4 -scale-100 mr-1 font-extralight' alt="logout.png" /> Logout</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </nav>
  );
};

export default Head;
