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
    img: Paslon1, // Directly assign the imported image
  },
  {
    id: 2,
    name: "Dillon Donovan Damaswara Putra",
    img: Paslon2, // Directly assign the imported image
  },
  {
    id: 3,
    name: "Gojoj Simanjuntak Junior ",
    img: Paslon3, // Directly assign the imported image
  },
];

const ListKandidat = () => {
  return (
    <>
    <Head/>
     <div className="bg-laut-dalam text-white min-h-screen flex flex-col items-center py-10 ">
      <div className="flex items-center text-white">
        <div className="h-px w-20 bg-white"></div>
        <p className="text-lg mx-4">
          Tentukan Kandidat Terbaikmu dan Klik Gambar Dibawah
        </p>
        <div className="h-px w-20 bg-white"></div>
      </div>
      <div className="flex mt-8 space-x-4 gap-32">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="flex-col items-center bg-red-500 rounded-lg p-5 w-40 border-solid border-2 relative"
          >
            <div
        id="dot"
        className="flex h-[50px] w-[50px] bg-laut-dalam border-solid border-2 rounded-full z-10 absolute -top-6 -left-6 items-center justify-center">
          <h3 className="w-full flex items-center justify-center text-center">{candidate.id}</h3>
          </div> 
            <img
              src={candidate.img}
              alt={candidate.name}
              className="w-32 h-32 object-cover rounded-lg "
            />
            <p className="mt-4 text-xl font-semibold break-words text-center">{candidate.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ListKandidat;





















