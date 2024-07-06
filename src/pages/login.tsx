// src/pages/Login.tsx
import React from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="flex bg-white shadow-lg overflow-hidden" style={{ width: '900px', height: '500px' }}>
        <div className="w-1/3 m-6 ml-20 bg-red-600 rounded-3xl flex flex-col justify-center items-center p-8">
          <img src="public/Voting-amico.svg" alt="Voting Illustration" className="h-72 w-auto" />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-sm font-normal mb-4">PENUS <span className="text-red-600">E-VOTING</span></h1>
          <h2 className="text-6xl font-bold mb-6">Masuk</h2>
          <form>
            <div className="mb-4 relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="NIS/NIG"
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="mb-6 relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Kata Sandi"
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 px-4 py-2 bg-red-600 text-white font-semibold rounded-3xl shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Masuk
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600 text-center font-semibold">Powered by <span className="text-red-600">DEVACCTO RPL</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;