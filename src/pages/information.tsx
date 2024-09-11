import Paslon1 from '/paslon1.png';
import React from 'react';
import Arrow from '/arrow.png';
import Footer from '../components/footer.tsx';
import { useNavigate } from 'react-router-dom';

const Information: React.FC = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  return (
    <>
     {/* <body className='mb-[13rem] mx-5 font-poppins'>
        <div onClick={back} className="cursor-pointer z-10 w-[50px] h-[50px] rounded-full bg-gradient-to-r from-merah-penus to-merah-gelap-penus mt-8 ml-5 flex items-center justify-center relative">
          <img src={Arrow} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div id="nomor" className="flex flex-col items-start justify-center h-full">
          <h1 className="-z-1 text-[60rem] mt-[40rem] text-black opacity-40 font-extrabold absolute">02</h1>
        </div>
        <div id='information' className='flex justify-between gap-[5rem] relative m-[4rem] mx-28'>
          <div className="bg-gradient-to-b from-merah-penus to-merah-tergelap rounded-xl max-h-[550px] drop-shadow-putih-cahaya-besar-besar border-putih-putih border-2">
            <img src={Paslon1} alt="hahay" className='h-full w-full rounded-xl'></img>
          </div>
          <div className="flex flex-col w-[70%] justify-start items-start gap-[3rem] text-white">
            <div id="nama" className="items-center gap-0">
              <div className="font-extrabold text-[5rem] leading-none">Dillon Donovan</div>
              <div className="font-extrabold text-[5rem] leading-none">Macabre Plaza</div>
            </div>
            <div className=''>
              <div>
                <div className="visi mb-5">
                  <h2 className='bg-merah-penus w-16 text-center font-bold text-2xl mb-1'>Visi</h2>
                  <p className='font-semibold text-2xl'>Memajukan Bogor untuk kesejahteraan rakyad kelas atas.</p>
                </div>
                <div className="misi mb-5">
                  <h2 className='bg-merah-penus w-16 text-center font-bold text-2xl mb-1'>Misi</h2>
                  <ul className='font-semibold text-2xl list-disc ml-4'>
                    <li>Memberikan akses kesehatan bagi warga Bogor</li>
                    <li>Menjadikan Bogor sebagai kota festival yang meriah</li>
                    <li>Sekolah gratis bagi semua golongan masyarakat tak terkecuali</li>
                  </ul>
                </div>
                <div className="proker mb-5">
                  <h2 className='bg-merah-penus w-24 text-center font-bold text-2xl mb-1'>Proker</h2>
                  <ul className='font-semibold text-2xl list-disc ml-4'>
                    <li>Makan Mukbang</li>
                    <li>Festival Coding</li>
                    <li>Susu Gratis</li>
                    <li>Jalan Sehat</li>
                    <li>Jogging bareng artis</li>
                    <li>Ketemu Elon Musk</li>
                  </ul>
                </div>
              </div>
                <button className='bg-gradient-to-br from-merah-penus to-merah-gelap-penus font-semibold text-2xl rounded-full px-20 py-4 float-right relative bottom-24 hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300'>Vote</button>
            </div>
          </div>
        </div>
      </body>*/}

{/*Revisi 2*/}

<main className="mb-[13rem] font-poppins">
  <div id="nomor" className="flex flex-col items-start justify-center w-full h-full">
    <h1 className="-z-1 text-[30rem] mt-[20rem] ml-[-7rem] md:text-[50rem] md:ml-[-5rem] text-black opacity-40 font-bold absolute">02</h1>
  </div>
  <div id="information" className="flex flex-col md:flex-row justify-between gap-[2rem] md:gap-[5rem] relative m-[3rem] md:mt-[5rem] mx-10 md:h-[25rem] md:w-[80rem]">
    <div className="flex justify-center w-full">
      <div className="bg-gradient-to-b from-merah-penus to-merah-tergelap rounded-xl max-h-[450px] w-[350px] md:max-h-[550px] drop-shadow-putih-cahaya-besar-besar border-putih-putih border-2 overflow-hidden">
        <img src={Paslon1} alt="Paslon" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-[70%] justify-center md:justify-start md:items-start gap-[1.5rem] md:gap-[3rem] text-white">
      {/* Nama Paslon */}
      <div id="nama" className="items-center gap-0 text-center md:text-left">
        <div className="font-bold text-[1.5rem] flex justify-center md:justify-start md:text-[3rem] md:whitespace-nowrap">
          Dillon Donovan Damaswara Putra
        </div>
        <div className="text-[1rem] flex justify-center md:justify-start md:text-[1.5rem] leading-none">
          Dillon juara indonesia dapat wifi 2 gbps
        </div>
      </div>

      <div>
        <div className="visi mb-5">
          <h2 className="bg-merah-penus w-12 md:w-16 text-center font-bold text-xl md:text-2xl mb-1">Visi</h2>
          <p className="font-semibold md:text-2xl">Memajukan Bogor untuk kesejahteraan rakyat kelas atas.</p>
        </div>

        <div className="misi mb-5">
          <h2 className="bg-merah-penus w-12 md:w-16 text-center font-bold text-xl md:text-2xl mb-1">Misi</h2>
          <ul className="font-semibold md:text-2xl list-disc ml-4">
            <li>Memberikan akses kesehatan bagi warga Bogor</li>
            <li>Menjadikan Bogor sebagai kota festival yang meriah</li>
            <li>Sekolah gratis bagi semua golongan masyarakat tak terkecuali</li>
          </ul>
        </div>

        <div className="proker mb-5">
          <h2 className="bg-merah-penus w-20 md:w-24 text-center font-bold text-xl md:text-2xl mb-1">Proker</h2>
          <ul className="font-semibold md:text-2xl list-disc ml-4">
            <li>Makan Mukbang</li>
            <li>Festival Coding</li>
            <li>Susu Gratis</li>
            <li>Jalan Sehat</li>
            <li>Jogging bareng artis</li>
            <div className="flex justify-between">
            <li>Ketemu Elon Musk</li>

      <button className="bg-gradient-to-br from-merah-penus to-merah-gelap-penus font-semibold text-xl md:text-2xl rounded-full mt-[-1rem] w-[120px] h-[40px] md:mt-[-2rem] md:text-center hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300">
        Vote
      </button>
      </div>
          </ul>

        </div>
      </div>

    </div>
  </div>
</main>
< Footer />

    </>
  );
};

export default Information;
