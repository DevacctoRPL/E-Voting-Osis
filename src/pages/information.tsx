import Paslon1 from '/paslon1.png';
import React from 'react';

const Information = () => {
  return (
    <>
      <div id="nomor" className="flex flex-col items-start justify-center h-full">
        <h1 className="z-[-1] text-[60rem] mt-[500px] text-[#000000] opacity-10 font-extrabold absolute">01</h1>
      </div>

      <div id="photocard" className="h-screen w-screen relative">
        <div className="z-2 w-[490px] h-[549px] bg-red-500 mt-[14.5rem] ml-[10rem] rounded-xl ">
        <img src={Paslon1} alt="" className='mb-10' />
        </div>
      </div>

      <div id="info">
        <h1 className="">Dilon donovan</h1>
        <p> </p>
      </div>
    </>
  );
};

export default Information;
