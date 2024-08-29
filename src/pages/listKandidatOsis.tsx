import Head from "../components/header";
import Footer from "../components/footer";
import Paslon1 from "/paslon1.png";
import Paslon2 from "/mark.png";
import Paslon3 from "/sitorus.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

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

const ListKandidatOsis: React.FC = () => {

  const navigate = useNavigate();
  const pilih = () => {

    navigate('/information')
  }

  return (
    <>
      <Head />
      <div className=" text-white flex flex-col items-center justify-center py-10 mb-14">
        <div className="flex items-center text-white">
          <div className="h-px w-20 bg-white"></div>
          <p className="text-lg mx-4">
            Tentukan Kandidat Terbaikmu dan Klik Gambar Dibawah
          </p>
          <div className="h-px w-20 bg-white"></div>
        </div>
        <div className="flex mt-8 space-x-4 gap-32">
          {candidates.map((candidate) => (
            <div onClick={pilih} key={candidate.id} className="drop-shadow-putih-cahaya flex flex-col items-center bg-gradient-to-t from-merah-gelap-penus to-merah-penus to-40% rounded-lg  justify-end px-1 mt-14 w-52 h-64 border-solid border-2 relative hover:drop-shadow-putih-cahaya-besar hover:scale-105 duration-300">
              <div id="dot" className="flex h-[50px] w-[50px] bg-laut-dalam border-solid rounded-full z-10 absolute -top-2 -left-3 items-center justify-center">
                <h3 className="w-full flex items-center justify-center text-center">{candidate.id}</h3>
              </div>
              <img src={candidate.img} alt={candidate.name} className="cursor-pointer object-cover relative rounded-md" />
              <p className="mt-4 text-xl text-center w-full absolute -bottom-16 ">{candidate.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListKandidatOsis;
