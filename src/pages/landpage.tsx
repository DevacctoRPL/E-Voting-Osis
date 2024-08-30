// React
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

// Resource
import Lampu from "/lampu.png";
import Cursor from "/click.png";
import Osis from "/osis.png";
import Mpk from "/mpk.png";

// Styling Component
import Head from "../components/header";
import Footer from "../components/footer";
import { useQuery } from "@tanstack/react-query";
import { cobarequest } from "../api/api";


const Landpage: React.FC = () => {
  const navigate = useNavigate();
  const { data: Message, isLoading } = useQuery({
    queryFn: () => cobarequest(),
    queryKey: ['cobarequest'],
  })


  const pilih = (kemana: string) => {
    navigate(`/list-Kandidat/${kemana}`);
  };

  return (
    <>
      <Head />
      <div className="overflow-hidden">
        <div className="w-screen h-screen p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-stretch z-[-1] pointer-events-none">
            <div className="flex flex-col items-start justify-center h-full">
              <h1 className="text-[15rem] text-putih-putih opacity-10 font-extrabold">
                PENUS
              </h1>
            </div>

            <div className="flex flex-col items-end justify-center h-full">
              <h1 className="text-[15rem] text-putih-putih opacity-10 font-extrabold">
                E-VOTING
              </h1>
            </div>
          </div>
          {/* Main content */}
          <div className="w-2/5 relative z-10">
            <h1 className="text-merah-penus text-8xl font-extrabold mb-4">PENUS</h1>
            <h1 className="text-putih-putih text-8xl font-extrabold mb-4">
              E-VOTING
            </h1>
            <p className="text-putih-putih mb-6">
              {isLoading ? "Loading" : Message.message}
            </p>
            <a href="#bijak">
              <button className="bg-merah-penus px-12  py-4 rounded-3xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] duration-200 hover:drop-shadow-merah-penus-bayangan hover:scale-105">
                <span>Saya Ingin Voting Sekarang</span>
              </button>
            </a>
          </div>
        </div>

        <div id="bijak" className="h-screen w-screen flex justify-center items-center p-72">
          <div className="relative">
            <h1 className="text-white text-4xl font-bold text-center">
              Pilih-lah Dengan Cerdas
            </h1>
            <div className="absolute top-0 right-[-64px] rotate-[32deg]">
              <img src={Lampu} alt="lampu" className="w-32 duration-200 hover:drop-shadow-kuning-lampu hover:scale-105" />
            </div>
            <p className="text-white text-3xl text-center font-normal mt-20">
              <i>
                “Tentukan pilihan Anda dengan bijaksana. Suara Anda adalah
                kontribusi penting dalam memilih pemimpin yang akan membawa
                perubahan positif.”
              </i>
            </p>
            <p className="text-white text-center text-3xl mt-16">
              ~ The Wise Man
            </p>
          </div>
        </div>

        <div className="w-screen h-screen">
          <div className="flex items-center justify-center h-full flex-col">
            <div className="flex items-center text-white">
              <div className="h-px w-20 bg-white"></div>
              <span className="mx-4 text-lg">Silahkan Klik Gambar Dibawah</span>
              <img src={Cursor} alt="mouse" className="w-6 mr-4" />
              <div className="h-px w-20 bg-white"></div>
            </div>

            <div className="flex justify-center items-center mt-14">
              <div className="flex space-x-8 gap-32">
                <div onClick={() => pilih("OSIS")} className="flex flex-col items-center p-4 rounded-lg shadow-osis bg-yellow-300 w-64 h-80 duration-300 hover:drop-shadow-kuning-osis hover:scale-105 cursor-pointer">
                  <h3 className="text-xl font-bold text-center">OSIS</h3>
                  <img src={Osis} alt="osis" className="w-64 h-60 mb-4" />
                </div>
                <div onClick={() => pilih("MPK")} className="flex flex-col items-center p-4 rounded-lg shadow-mpk bg-blue-300 w-64 h-80 duration-300 hover:drop-shadow-biru-mpk hover:scale-105 cursor-pointer">
                  <h3 className="text-xl font-bold text-center">MPK</h3>
                  <img src={Mpk} alt="mpk" className="w-64 h-60 mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landpage;
