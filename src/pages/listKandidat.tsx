import Head from "../styling-components/header";
import Footer from "../styling-components/footer";
import Paslon1 from "/paslon1.png";
import Paslon2 from "/mark.png";
import Paslon3 from "/sitorus.jpg";
import React from "react";

const candidates = [
  {
    id: 1,
    name: "Elon Musk",
    img: Paslon1,
  },
  {
    id: 2,
    name: "Dillon Donovan Damaswara Putra",
    img: Paslon2,
  },
  {
    id: 3,
    name: "Gojoj Simanjuntak Junior",
    img: Paslon3,
  },
];

const ListKandidat = () => {
  return (
    <>
      <Head />
      <div className=" text-white min-h-screen w-screen flex flex-col items-center justify-center py-10">
        <div className="flex items-center text-white">
          <div className="h-px w-20 bg-white"></div>
          <p className="text-lg mx-4">
            Tentukan Kandidat Terbaikmu dan Klik Gambar Dibawah
          </p>
          <div className="h-px w-20 bg-white"></div>
        </div>
        <div className="flex mt-8 space-x-4 gap-32">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="drop-shadow-putih-cahaya flex flex-col items-center bg-gradient-to-t from-merah-gelap-penus to-merah-penus to-40% rounded-lg justify-end px-1 w-52 h-64 border-solid border-2 relative">
              <div id="dot" className="flex h-[50px] w-[50px] bg-laut-dalam border-solid rounded-full z-10 absolute -top-2 -left-3 items-center justify-center">
                <h3 className="w-full flex items-center justify-center text-center">{candidate.id}</h3>
              </div>
              <img src={candidate.img} alt={candidate.name} className=" object-cover relative rounded-md" />
              <p className="mt-4 text-base text text-center w-full absolute -bottom-14 ">{candidate.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListKandidat;
