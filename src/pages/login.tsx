// src/pages/Login.tsx
import { useMutation } from '@tanstack/react-query';
import Voting from '/Voting-amico.svg';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFn } from '../api/api';
import { UserContext } from '../context/userContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [NIS, setNIS] = useState<string>("")
  const [Password, setPassword] = useState<number>(0)
  const user = useContext(UserContext)
  const PostLoginData = useMutation({
    mutationFn: LoginFn,
    onSuccess(data) {
      user?.setUser(data)
      navigate("/landpage")
    },
  })

  const handleLogin = () => {
    PostLoginData.mutate({ NIU: NIS, password: Password })
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
    <main className="flex max-md:gap-10 my-8 w-screen h-full max-md:h-screen items-center justify-center  ">
      <section className="w-[70%] h-[80%] flex max-md:flex items-center justify-between max-md:flex-col">
        <div id="Thumbnail" className="bg-gradient-to-t from-merah-gelap-penus from-60% to-merah-penus rounded-3xl h-[50%] max-md:h-[95%] max-md:w-1/2 flex items-center justify-center max-md:p-6">
          <img src={Voting} alt="Voting Amico" className="w-11/12 h-11/12" />
        </div>
        <div id="Form" className="h-fit max-md:w-[45%] max-md:flex flex-col items-start justify-center">
          <div className="mb-6 max-md:w-full grow flex flex-col max-md:justify-center gap-3">
            <h1 className="text-xl max-md:text-6xl text-white font-semibold max-md:mb-20 text-center items-center max-md:text-left mt-3">
              <span className="text-merah-penus">PENUS</span> E-VOTING
            </h1>

            <h2 className="max-md:text-4xl text-white font-semibold max-md:font-bold max-md:ml-2 text-center max-md:text-left mt-3 max-md:mt-1">Masuk</h2>

            <div className="mb-3">
              <label htmlFor="nisNig" className="block text-putih-putih text-sm max-md:text-2xl font-medium ml-2 mb-2 text-left">
                NIS/NIG
              </label>
              <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("nis", NIS)
                handleOnchanges("NIS", e)
              }} id="nisNig" placeholder="Masukkan NIS anda" className="w-52 max-md:w-full rounded-full px-3 py-2 text-laut-dalam placeholder:text-sm  focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300 max-max-md:w-full" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-putih-putih text-sm max-md:text-2xl font-medium ml-2 mb-2 text-left">
                Kata Sandi
              </label>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("pass", Password)
                handleOnchanges("Pass", e)
              }} type="password" id="password" placeholder="Masukkan password anda" className="w-52 max-md:w-full rounded-full px-3 py-2 text-laut-dalam placeholder:text-sm focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300 max-max-md:w-full" required />
            </div>

            <div className="max-md:mt-6 max-md:items-start max-md:justify-start w-full flex justify-center">
              <div onClick={() => handleLogin()} className="w-1/2 bg-merah-penus text-center text-white font-bold py-2 px-4 rounded-full hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300">
                {PostLoginData.isPending ? "Logging in" : "Masuk"}
              </div>
            </div>
          </div>

          <h5 className="text-center max-md:top-24 my-10 max-md:my-0 max-md:relative text-white text-xs max-md:text-xl font-semibold max-md:mb-8 max-md:text-putih-putih max-md:text-left">
            Powered by <span className=" text-penus bg-white rounded-full font-bold max-md:text-merah-penus p-1 max-md:p-2">DEVACCTO RPL</span>
          </h5>
        </div>
      </section>
    </main>
  );
};

export default Login;