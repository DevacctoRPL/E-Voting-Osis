// src/pages/Login.tsx
import { useMutation } from '@tanstack/react-query';
import Voting from '/assets/Voting-amico.svg';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFn } from '../api/api';
import axios from 'axios';
import { useSessionStorage } from 'usehooks-ts';
import { User } from '../types/types';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [NIS, setNIS] = useState<string>("")
  const [Password, setPassword] = useState<number>(0)
  const [ErrorMsg, setErrorMsg] = useState<string>()
  const [_,setUser,] = useSessionStorage<User | null>('user',null)
  const PostLoginData = useMutation({
    mutationFn: LoginFn,
    onSuccess(data) {
      console.log(data)
      setUser(data)
      navigate("/landpage")
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;
        if (data) {
          setErrorMsg(data.message); 
        }
      } else {
        setErrorMsg("An unexpected error occurred."); // Fallback message
      }
    },
  })


  const handleLogin = () => {
    PostLoginData.mutateAsync({ NIU: NIS, password: Password })
  };

  const handleOnchanges = (type: "Pass" | "NIS", e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    switch (type) {
      case "NIS":
        setNIS(e.currentTarget.value)
        break;
      case "Pass":
        setPassword(parseInt(e.currentTarget.value))
        break;
    }
  }

  return (
    <main className="flex md:gap-10 my-8 w-screen h-full md:h-screen items-center justify-center  ">
      <section className="w-[70%] h-[80%] flex md:flex items-center justify-between max-md:flex-col">
        <div id="Thumbnail" className="bg-gradient-to-t from-merah-gelap-penus from-60% to-merah-penus rounded-3xl h-[50%] md:h-[95%] md:w-1/2 flex items-center justify-center md:p-6 max-md:py-4">
          <img src={Voting} alt="Voting Amico" className="w-11/12 h-11/12" />
        </div>
        <div id="Form" className="h-fit md:w-[45%] md:flex flex-col items-start justify-center">
          <div className="mb-6 md:w-full grow flex flex-col md:justify-center gap-3">
            <h1 className="text-xl text-nowrap md:text-6xl md:text-wrap text-white font-semibold md:mb-5 text-center items-center md:text-left mt-3">
              <span className="text-merah-penus">PENUS</span> E-VOTING
            </h1>

            <div className="mb-3">
              <label htmlFor="nisNig" className="block text-putih-putih text-sm md:text-2xl font-medium ml-2 mb-2 text-left">
                NIS/NIG
              </label>
              <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnchanges("NIS", e)
              }} id="nisNig" placeholder="Masukkan NIS anda" className="w-52 md:w-full rounded-full px-3 py-2 text-laut-dalam placeholder:text-sm  focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300 max-md:w-full" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-putih-putih text-sm md:text-2xl font-medium ml-2 mb-2 text-left">
                Kata Sandi
              </label>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleOnchanges("Pass", e)
              }} type="password" id="password" placeholder="Masukkan password anda" className="w-52 md:w-full rounded-full px-3 py-2 text-laut-dalam placeholder:text-sm focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300 max-md:w-full" required />
            </div>

            <div className="md:items-center md:gap-8 md:justify-center w-full flex flex-col justify-center">
              {ErrorMsg !== "" ? <p className="text-red-500">{ErrorMsg}</p> : undefined}
              <button onClick={() => handleLogin()} className="w-1/2 bg-merah-penus text-center text-white font-bold py-2 px-4 rounded-full hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300">
                {PostLoginData.isPending ? "Logging in" : "Masuk"}
              </button>
            </div>
          </div>

          <h5 className="text-center my-10 md:relative text-white text-xs md:text-lg font-semibold md:mb-8 md:text-putih-putih md:text-center">
            Powered by <span className=" text-penus bg-white rounded-full font-bold md:text-merah-penus p-1">DEVACCTO RPL</span>
          </h5>
        </div>
      </section>
    </main>
  );
};

export default Login;
