// src/pages/Login.tsx
import Voting from '../../public/Voting-amico.svg'
import React from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

const Login: React.FC = () => {
  return (
    <main className="flex gap-10 w-screen h-screen items-center justify-center overflow-hidden">
      <section className="w-[70%] h-[80%] flex items-center justify-between ">
        <div id="Thumbnail" className="bg-gradient-to-t from-[#a61603] from-60% to-[#d32710] rounded-3xl h-[95%] w-[50%] items-center justify-center">
          <img src={Voting} alt="Voting Amico" />
        </div>
          <div id="Form" className="h-full w-[45%] flex flex-col items-stretch justify-center">
            <form className="mb-6 w-full grow flex flex-col justify-center gap-3">
            <h1 className="text-[3rem] text-white font-semibold mb-20 text-left mt-3 text-2xl">
              <span className="text-[#d2270b]">PENUS</span> E-VOTING
            </h1> 
              <h2 className="text-4xl text-white font-bold ml-2 text-left mt-1">Masuk</h2>
              <div className="mb-3">
                <label htmlFor="nisNig" className="block text-white text-2xl font-medium ml-2 mb-2 text-left">NIS/NIG</label>
                <input type="text" id="nisNig" className="w-[100%] rounded-2xl bg-gray-200 px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300" />
              </div>
  
              <div className="mb-3">
                <label htmlFor="password" className="block text-white text-2xl font-medium ml-2 mb-2 text-left">Kata Sandi</label>
                <input type="password" id="password" className="w-[100%] rounded-2xl bg-gray-200 px-3 py-2 text-gray-700 border border-gray-300 focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300" />
              </div>
  
              <div className="mt-6">
                <button type="submit" className="w-1/2 bg-[#D22713] text-white font-bold py-2 px-4 rounded-2xl float-left">Masuk</button>
              </div>
            </form>
            <h5 className="text-xl font-semibold text-white mb-6 text-left">Powered by <span className="font-bold text-[#D22713]">DEVACCTO RPL</span></h5>
          </div>
        </section>
      </main>
  );
};

export default Login;