
import Paslon1 from "/paslon1.png";
import Paslon3 from "/sitorus.jpg";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Daftar kandidat
const candidates = [
  {
    id: 1,
    name: "Elon Musk anak baik",
    img: Paslon1,
  },
  {
    id: 2,
    name: "M riki gojo satoru",
    img: Paslon3,
  },
  {
    id: 3,
    name: "M riki gojo satoru",
    img: Paslon3,
  },
  {
    id: 4,
    name: "M riki gojo satoru",
    img: Paslon3,
  },
];

const ListKandidatOsis: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  // Mengatur scroll ke posisi (0, 0) alias bagian atas halaman
  }, []);

  const navigate = useNavigate();
  const pilih = () => {
    navigate("/information");
  };

  return (
    <main className="max-md:pt-20 pt-16">
      <div className="text-white flex flex-col items-center justify-center py-10 mb-14">
        {/* Heading Section */}
        <div className="flex items-center text-white mb-20">
          <div className="h-px w-16 md:w-20 bg-white"></div>
          <p className="text-xs md:text-lg mx-4 md:mx-4 text-center">
            Tentukan Kandidat OSIS Terbaikmu
          </p>
          <div className="h-px w-16 md:w-20 bg-white"></div>
        </div>

        {/* hahay */}
        <div className="flex flex-wrap justify-center gap-10 md:flex md:mt-8  md:gap-32">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex flex-col items-center">
              <div
                onClick={pilih}
                className="drop-shadow-putih-cahaya flex flex-col items-center bg-gradient-to-t from-merah-gelap-penus to-merah-penus to-40% rounded-lg justify-end px-1 w-32 h-52 md:w-52 md:h-64 border-solid border-2 hover:drop-shadow-putih-cahaya-besar hover:scale-105 duration-300"
              >
                {/* Lingkaran angka */}
                <div
                  id="dot"
                  className="flex h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-laut-dalam border-solid rounded-full z-10 absolute -top-2 -left-3 items-center justify-center"
                >
                  <h3 className="w-full flex items-center justify-center text-center">
                    {candidate.id}
                  </h3>
                </div>
                {/* Gambar kandidat */}
                <img
                  src={candidate.img}
                  alt={candidate.name}
                  className="cursor-pointer object-cover rounded-md w-full h-full"
                />
              </div>
              {/* Nama kandidat*/}
              <div className="mt-2 w-32 text-center">
                <p className="text-sm md:text-xl text-white break-words">
                  {candidate.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ListKandidatOsis;
