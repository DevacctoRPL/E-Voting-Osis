import Paslon1 from '/paslon1.png';
import React from 'react';
import Arrow from '/arrow.png';
// Styling Component
// import Head from "../styling-components/header";
import Footer from '../styling-components/footer';

const Information: React.FC = () => {
  return (
    <>
      <body className='mb-[10rem] font-poppins'>
        <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-merah-penus to-merah-gelap-penus mt-5 ml-5 flex items-center justify-center relative">
          <img src={Arrow} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div id="nomor" className="flex flex-col items-start justify-center h-full">
          <h1 className="z-[-1] text-[60rem] mt-[500px] text-[#000000] opacity-10 font-extrabold absolute">01</h1>
        </div>
        <div id='information' className='flex justify-around relative'>
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
              <div id='visi' className='w-[37rem] h-[150px] bg-glass p-5 overflow-auto rounded-lg'>
                <h1 className='font-semibold text-white text-center mb-2'>Visi</h1>
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
            <div id="misi-wrapper" className='mt-10'>
              <div id='misi' className='w-[37rem] h-[150px] bg-glass p-5 overflow-auto rounded-lg'>
                <h1 className='font-semibold text-white text-center mb-2'>Misi</h1>
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
              <div id='proker' className='w-[37rem] h-[150px] bg-glass p-5 overflow-auto rounded-lg'>
                <h1 className='font-semibold text-white text-center mb-2'>Program kerja</h1>
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
          </div>
        </div>  
      </body>
      <Footer />
    </>
  );
};

export default Information;
