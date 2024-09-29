import React, { useContext, useEffect, useState, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { candidates } from '../utils/candidates';
import ImageAnimation, { LoaderZ, OrgImage } from '../components/animasiimage';
import { useMutation } from '@tanstack/react-query';
import { VoteFn } from '../api/api';
import { UserContext } from '../context/userContext';
import { ArrowLeft } from 'lucide-react';
import { votedContext } from '../context/votedContext';

const Information: React.FC = () => {
  const user = useContext(UserContext)
  const votestuff = useContext(votedContext)
  const [status, setStatus] = useState(votestuff?.votedfs)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(votestuff?.votedfs)
  }, [])

  const nav = useNavigate()

  const VoteData = useMutation({
    mutationKey: ['VoteCog'],
    mutationFn: VoteFn,
  })

  const { id } = useParams<{ id: string }>()
  const candidate = candidates.find((cad) => cad.id === parseInt(id as string))

  const handleBack = () => {
    nav(`/listkandidat/${candidate?.org}`)
  }

  const handleVote = () => {

    VoteData.mutate({ NIU: user?.user?.NIU as string, No_Pilihan: parseInt(id as string) })

    if (VoteData.isError) return

    if (votestuff?.votedfs !== undefined) {
      console.log("ada cog",votestuff?.votedfs)
    } else {
      const kemanacog = candidate?.org === "OSIS" ? "MPK" : "OSIS"
      console.log("gaada bejir o")
    }

    votestuff?.setVotedFor(candidate?.org as "MPK" | "OSIS")
  }

  return (
    <div className="w-full h-full md:flex md:flex-row my-[8rem] font-poppins text-white justify-between items-center lg:items-start lg:gap-12 lg:justify-center">

      <div className="w-full relative flex items-center mb-[4rem] justify-center lg:mb-0 md:w-[30%] lg:flex-none">
        <OrgImage Org={candidate?.org as "MPK" | "OSIS"} className="z-10 bottom-[-4rem] left-[37%] absolute text-[14rem] w-[25%] md:w-[45%] lg:bottom-[-6rem] lg:left-[28%] drop-shadow-biru-mpk" />
        <div className="flex w-[70%] md:w-full border-2 border-white bg-merah-penus rounded-xl shadow-white shadow-xl">
          <p className="w-fit drop-shadow-putih-cahaya absolute z-10 top-[-5%] right-[3rem] border-2 border-white px-2 rounded-full text-[2rem] lg:text-[2.5rem] lg:right-[-2rem] text-putih-putih font-bold bg-gelap">0{candidate?.nopil}</p>
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
        <div className="flex flex-col self-center items-center gap-4">
          <p className="w-fit text-[2rem] font-bold bg-merah-penus px-2 py-1">Misi</p>
          <ol className="flex flex-col ml-3 text-[1.2rem] leading-relaxed lg:gap-4 gap-6 text-3">
            {candidate?.misi.map((misi, index) => (
              <li key={index}><span className="mr-2 text-[1.1rem] font-bold">{index + 1}.</span>{misi}</li>
            ))}
          </ol>
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <p className="w-fit text-[2rem] self-center font-bold bg-merah-penus px-2 py-1 mb-5">Program Kerja</p>
          <p className="ml-3 text-[1.4rem] text-left font-bold ">A. Jangka Pendek: </p>
          <ol className="flex flex-col ml-4 text-left text-[1.2rem] leading-relaxed lg:gap-4 gap-6 text-3 mb-3">
            {candidate?.proker.Jangka_Pendek.map((misi, index) => (
              <li key={index}><span className="mr-2 text-[1.1rem] font-bold">{index + 1}.</span>{misi}</li>
            ))}
          </ol>
          <p className="ml-3 text-[1.4rem] font-bold">B. Jangka Panjang: </p>
          <ol className="flex flex-col ml-4 text-left text-[1.2rem] leading-relaxed lg:gap-4 gap-6 text-3 ">
            {candidate?.proker.Jangka_Panjang.map((misi, index) => (
              <li key={index}><span className="mr-2 text-[1.1rem] font-bold">{index + 1}.</span>{misi}</li>
            ))}
          </ol>
        </div>
        <div className="w-full self-start relative flex justify-center mt-[2rem] items-center p-3">
          <button onClick={handleBack} className="underline absolute right-[75%] md:right-[65%] top-[25%] p-2 border border-white bg-merah-penus rounded-full text-white hover:text-merah-penus hover:bg-putih-putih hover:border-black">
            {VoteData.isPending ? <LoaderZ h={"2rem"} /> : <ArrowLeft />}
          </button>
          <p onClick={() => handleVote()} className="w-fit justify-self-center text-[2rem] font-bold bg-merah-penus px-[3rem] py-[0.10rem] rounded-full border-white border-2 hover:bg-putih-putih hover:text-merah-penus hover:drop-shadow-merah-vote hover:cursor-pointer hover:scale-[110%] duration-500">Vote</p>
        </div>
          <p>{status}</p>
      </div>
    </div>
  );
};

export default Information;

