import Paslon1 from '/paslon1.png';
import React from 'react';
import Arrow from '/arrow.png';
// Styling Component
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Information: React.FC = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <body className='mb-[10rem] font-poppins'>
        <div onClick={back} className="cursor-pointer z-10 w-[50px] h-[50px] rounded-full bg-gradient-to-r from-merah-penus to-merah-gelap-penus mt-5 ml-5 flex items-center justify-center relative">
          <img src={Arrow} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div id="nomor" className="flex flex-col items-start justify-center h-full">
          <h1 className="z-[-1] text-[60rem] mt-[40rem] text-[#000000] opacity-40 font-extrabold absolute">02</h1>
        </div>
        <div id='information' className='flex justify-between gap-[2rem] relative m-[4rem]'>
          <div className="bg-merah-penus rounded-xl p-3">
            <img src={Paslon1}></img>
          </div>
          <div className="flex flex-col w-[70%] justify-start items-start gap-[3rem] text-white">
            <div id="nama" className="flex flex-col items-center gap-0">
              <div className="font-extrabold text-[3rem] leading-none">Dillon Donovan</div>
              <p className="text-[2rem]">&</p>
              <div className="font-extrabold text-[3rem] leading-none">Macabre Plaza</div>
            </div>
            <div id="visi" className="flex flex-col w-full items-start bg-black bg-opacity-70 border-white border-2 rounded-xl">
              <div className="w-full bg-merah-penus rounded-t-xl text-center text-3xl">VISI</div>
              <ul className="p-10">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Information;
