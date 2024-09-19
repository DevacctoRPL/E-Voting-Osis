import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { candidates } from '../utils/candidates';
import ImageAnimation from '../components/animasiimage';
import { useMutation } from '@tanstack/react-query';
import { VoteFn } from '../api/api';
import { UserContext } from '../context/userContext';

const Information: React.FC = () => {
  const user= useContext(UserContext)
  const nav = useNavigate()

  const VoteData = useMutation({
    mutationKey: ['VoteCog'],
    mutationFn: VoteFn,
  })

  const { id } = useParams<{ id: string }>()
  const candidate = candidates.find((cad) => cad.id === parseInt(id as string))

  const handleVote = ()=>{
    const kemanacog = candidate?.org === "OSIS" ? "MPK" : "OSIS"
    VoteData.mutate({NIU:user?.user?.NIU as string, No_Pilihan:parseInt(id as string)})
    VoteData.isSuccess ? nav(`/listkandidat/${kemanacog}`) : console.log("lah error pea")
  }

  return (
    <div className="w-full h-full md:flex md:flex-row my-[8rem] font-poppins text-white justify-between items-center lg:items-start lg:gap-12 lg:justify-center">

      <p className="z-[-1] top-[-2rem] left-2 absolute text-[14rem] w-[75%] md:w-[75%] md:text-[30rem] lg:top-[-10rem] lg:left-[-1rem] text-black opacity-40 font-bold">0{candidate?.nopil}</p>

      <div className="w-full flex items-center mb-[4rem] justify-center lg:mb-0 md:w-[30%] lg:flex-none">
        <div className="flex w-[70%] md:w-full  border-2 border-white bg-merah-penus rounded-xl shadow-white shadow-xl">
          <ImageAnimation candidate={parseInt(id as string)} />
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center px-5 md:px-0 md:w-[50%] gap-10 md:text-left">
        <div className="flex flex-col text-center items-center mb-[3rem] md:mb-[1rem] text-[3rem] md:text-[3.5rem] font-bold gap-7 leading-[3.3rem]">
          <p>{candidate?.nama_ketua}</p>
          <p>&</p>
          <p>{candidate?.nama_wakil}</p>
        </div>
        <div className="flex w-full items-center flex-col gap-4 ">
          <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Visi</p>
          <p className="ml-3 text-[1.2rem]">{candidate?.visi}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Misi</p>
          <ol className="flex flex-col ml-3 text-[1.2rem] leading-relaxed lg:gap-4 gap-6 text-3">
            {candidate?.misi.map((misi,index)=>(
              <li><span className="mr-2 text-[1.1rem] font-bold">{index + 1}.</span>{misi}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Program Kerja</p>
        </div>
        <p onClick={handleVote} className="w-fit text-[2rem] mt-[4rem] font-bold bg-merah-penus px-[4rem] py-2 rounded-full border-white border-2 hover:cursor-pointer hover:shadow-lg hover:shadow-white hover:scale-[110%] duration-500">Vote</p>
      </div>
    </div>
  );
};

export default Information;

