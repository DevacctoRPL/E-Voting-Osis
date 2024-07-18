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
          <div id="photocard" className=" relative -mt-[10rem] mr- absolute">
            <div className="z-2 w-[490px] h-[549px] bg-red-500 mt-[14.5rem] ml-[10rem] rounded-xl ">
              <img src={Paslon1} alt="" className="absolute -mt-8 ml-5" />
            </div>
          </div>
          <div id='info-wrapper' className='flex-col -ml-[5rem]'>
            <div id="info" className='text-white mt-[50px] -ml-[10rem] font-poppins font-bold flex-col justify-center items-start w-[50rem]'>
              <h1 className="text-[4rem] text-wrap ">Dilon donovan Damaswara Putra</h1>
              <p className='flex justify-center -ml-[20rem]'> Dillon Juara Indonesia Dapat Wifi 2 GBPS</p>
            </div>
            <div id="visi-wrapper">
              <div id='visi' className='w-[5rem] h-[1.5rem] bg-merah-penus -ml-[10rem] mt-[2rem]'>
                <h1 className='font-semibold text-white inline-block align-middle text-center ml-5'>Visi</h1>
                <div className='w-[50rem] ml-[1rem]'>
                  <ul className='list-disc text-white mt-5'>
                    <li>AkAN Mewmberikan sprei gratis setiap hari</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="misi-wrapper">
              <div id='misi' className='w-[5rem] h-[1.5rem] bg-merah-penus -ml-[10rem] mt-[10rem]'>
                <h1 className='font-semibold text-white inline-block align-middle text-center ml-5'>Misi</h1>
                <div className='w-[50rem] ml-[1rem]'>
                  <ul className='list-disc text-white mt-5'>
                    <li>AkAN Mewmberikan sprei gratis setiap hari</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                    <li>ayam potojh</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="proker-wrapper">
              <div id='proker' className='w-[10rem] h-[1.5rem] bg-merah-penus -ml-[10rem] mt-[10rem]'>
                <h1 className='font-semibold text-white inline-block align-middle text-center ml-5'>Program kerja</h1>
                <div className='w-[50rem] ml-[1rem]'>
                  <ul className='list-disc text-white mt-5'>
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
