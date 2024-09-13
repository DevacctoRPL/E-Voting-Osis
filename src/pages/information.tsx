import Paslon1 from '/paslon1.png';
import React from 'react';
import { useParams } from 'react-router-dom';
import { candidates } from '../utils/candidates';

const Information: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const candidate = candidates.find((cad)=>cad.id === parseInt(id as string))
  return (
      <div className="w-full h-full md:flex md:flex-row my-[10rem] sm:my-[9rem] font-poppins text-white justify-between items-center lg:items-start lg:gap-10 lg:justify-center">

        <p className="z-[-1] absolute md:w-75% md:text-[30rem] top-[-10rem] left-[-1rem] text-black opacity-40 font-bold">0{candidate?.nopil}</p>

        <div className="flex flex-col  mb-[3rem] md:mb-0  gap-12 justify-between items-center md:flex">
          <img src={Paslon1} alt="" className="max-w-[75%] border-2 border-white bg-merah-penus rounded-xl shadow-white shadow-xl" />
        </div>

        <div className="flex flex-col w-full items-center justify-center px-5 md:px-0 md:w-[50%] gap-20 text-center md:text-left">
          <div className="flex flex-col md:self-start mb-[3rem] md:mb-[1.5rem] text-[2rem] md:text-[3.5rem] font-bold gap-5 leading-[1.95rem]">
            <p>{candidate?.nama_ketua}</p>
            <p>{candidate?.nama_wakil}</p>
          </div>
          <div className="flex w-full items-center flex-col gap-4 ">
            <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Visi</p>
            <p className="ml-3 text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis quis commodi excepturi assumenda nisi dolor explicabo. Distinctio, ea fugit?</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Misi</p>
            <ol className="flex flex-col ml-3 text-[1.3rem] leading-relaxed gap-3 list-decimal list-inside text-3">
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at aliquid fuga ex quod. Suscipit est repellat cumque reprehenderit minus!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum debitis vero? Eaque quo sapiente, dicta harum quia asperiores exercitationem magnam nam amet dignissimos unde?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat molestiae aspernatur laudantium totam similique!</li>
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Visi</p>
          </div>
          <p className="w-fit text-[2rem] font-bold bg-merah-penus px-[4rem] py-2 rounded-full border-white border-2">Vote</p>
        </div>
      </div>
  );
};

export default Information;
