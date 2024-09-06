import Paslon1 from '/paslon1.png';
import React from 'react';
import Arrow from '/arrow.png';
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
<body className="mb-[13rem] mx-5 font-poppins">
  <div onClick={back} className="cursor-pointer z-10 w-[50px] h-[50px] rounded-full bg-gradient-to-r from-merah-penus to-merah-gelap-penus mt-8 ml-5 flex items-center justify-center relative">
    <img src={Arrow} alt="Back Arrow" className="w-[30px] h-[30px]" />
  </div>

  <div id="nomor" className="flex flex-col items-start justify-center h-full">
    <h1 className="-z-1 text-[20rem] md:text-[60rem] mt-[5rem] md:mt-[10rem] text-black opacity-40 font-extrabold absolute">02</h1>
  </div>

  <div id="information" className="flex flex-col md:flex-row justify-between gap-[2rem] md:gap-[5rem] relative m-[2rem] md:m-[4rem] mx-10 md:mx-28">
    <div className="bg-gradient-to-b from-merah-penus to-merah-tergelap rounded-xl aspect-[3/4] max-h-[450px] md:max-h-[550px] drop-shadow-putih-cahaya-besar-besar border-putih-putih border-2 overflow-hidden">
      <img src={Paslon1} alt="Paslon" className="w-full h-full object-cover" />
    </div>

    <div className="flex flex-col w-full md:w-[70%] justify-start items-start gap-[1.5rem] md:gap-[3rem] text-white">
      <div id="nama" className="items-center gap-0">
        <div className="font-extrabold text-[2.5rem] md:text-[5rem] leading-none">Dillon Donovan</div>
        <div className="font-extrabold text-[2.5rem] md:text-[5rem] leading-none">Macabre Plaza</div>
      </div>

      <div>
        <div className="visi mb-5">
          <h2 className="bg-merah-penus w-12 md:w-16 text-center font-bold text-xl md:text-2xl mb-1">Visi</h2>
          <p className="font-semibold text-xl md:text-2xl">Memajukan Bogor untuk kesejahteraan rakyat kelas atas.</p>
        </div>

        <div className="misi mb-5">
          <h2 className="bg-merah-penus w-12 md:w-16 text-center font-bold text-xl md:text-2xl mb-1">Misi</h2>
          <ul className="font-semibold text-xl md:text-2xl list-disc ml-4">
            <li>Memberikan akses kesehatan bagi warga Bogor</li>
            <li>Menjadikan Bogor sebagai kota festival yang meriah</li>
            <li>Sekolah gratis bagi semua golongan masyarakat tak terkecuali</li>
          </ul>
        </div>

        <div className="proker mb-5">
          <h2 className="bg-merah-penus w-20 md:w-24 text-center font-bold text-xl md:text-2xl mb-1">Proker</h2>
          <ul className="font-semibold text-xl md:text-2xl list-disc ml-4">
            <li>Makan Mukbang</li>
            <li>Festival Coding</li>
            <li>Susu Gratis</li>
            <li>Jalan Sehat</li>
            <li>Jogging bareng artis</li>
            <li>Ketemu Elon Musk</li>
          </ul>
        </div>
      </div>

      <button className="bg-gradient-to-br from-merah-penus to-merah-gelap-penus font-semibold text-xl md:text-2xl rounded-full px-16 md:px-20 py-3 md:py-4 hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300">
        Vote
      </button>
    </div>
  </div>
</body>

      
    </>
  );
};

export default Information;
