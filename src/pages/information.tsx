import Paslon1 from '/paslon1.png';
import React from 'react';
import Arrow from '/arrow.png';
import { Link } from 'react-router-dom';
// Styling Component
// import Head from "../styling-components/header";
import Footer from '../styling-components/footer';

const Information: React.FC = () => {


  
  return (
    <>
      <body className='mb-[10rem] font-poppins'>
        <Link to={"list-kandidat"} className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-merah-penus to-merah-gelap-penus mt-5 ml-5 flex items-center justify-center relative cursor-pointer">
          <img src={Arrow} alt="" className="w-[30px] h-[30px]" />
        </Link>
        <div id="nomor" className="flex flex-col items-start justify-center h-full">
          <h1 className="z-[-1] text-[60rem] mt-[500px] text-[#000000] opacity-40 font-extrabold absolute">01</h1>
        </div>
        <div id='information' className='flex justify-around relative mr-[4rem]'>
          <div id="photocard" className="relative -mt-[10rem] mr-10">
            <div className="z-2 w-[490px] h-[549px] bg-merah-penus mt-[14.5rem] ml-[10rem] rounded-xl">
              <img src={Paslon1} alt="" className="absolute -mt-8 ml-5" />
            </div>
          </div>
          <div id='info-wrapper' className='flex-col ml-[2rem]'>
            <div id="info" className='text-white mt-[50px] font-poppins font-bold flex-col justify-center items-start w-[50rem]'>
              <h1 className="text-[4rem]">Dilon donovan Damaswara Putra</h1>
              <p className='flex justify-center'> Dillon Juara Indonesia Dapat Wifi 2 GBPS</p>
            </div>
            <div id="visi-wrapper" className='mt-10'>
              <div id='visi' className='w-[37rem] h-[150px] bg-glass  p-0 overflow-auto rounded-lg'>
                <div className='pr-[5rem] pl-[5rem] sticky top-0 bg-merah-penus'>
                  <h1 className='font-semibold text-white text-center mb-2 pr-5 sticky top-0'>Visi</h1>
                </div>
                <div className='ml-5'>
                  <ul className='list-disc text-white'>
                    <li>AkAN Mewmberikan sprei gratis setiap hari</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="misi-wrapper" className='mt-10'>
              <div id='misi' className='w-[37rem] h-[150px] bg-glass p-0 overflow-auto rounded-lg'>
              <div className='pr-[5rem] pl-[5rem] sticky top-0 bg-merah-penus'>
                  <h1 className='font-semibold text-white text-center mb-2 pr-5 sticky top-0'>Misi</h1>
                </div>
                <div className='ml-5'>
                  <ul className='list-disc text-white'>
                    <li>AkAN Mewmberikan sprei gratis setiap hari</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="proker-wrapper" className='mt-6'>
              <div id='proker' className='w-[37rem] h-[150px] bg-glass p-0 overflow-auto rounded-lg'>
              <div className='pr-[5rem] pl-[5rem] sticky top-0 bg-merah-penus'>
                  <h1 className='font-semibold text-white text-center mb-2 pr-5 sticky top-0'>Program Kerja</h1>
                </div>
                <div className='ml-5'>
                  <ul className='list-disc text-white'>
                    <li>AkAN Mewmberikan sprei gratis setiap hari</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                  </ul>
                </div>
              </div>
              <button className='absolute bottom-[-4rem] right-0 bg-merah-penus text-white font-bold py-3 drop-shadow-2xl px-16 rounded-full'>
              Vote
            </button>
            </div>
          </div>
        </div>  
      </body>
      <Footer />
    </>
  );
};

export default Information;
