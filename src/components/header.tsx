import React, { useContext, useEffect } from "react";

import Penus from "/assets/penus.png";
import User from "/assets/user.png";
import { UserContext } from "../context/userContext";
import { LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { LogoutFn } from "../api/api";
import { useNavigate } from "react-router-dom";

const Head: React.FC = () => {
  const user = useContext(UserContext);
  const nav = useNavigate()

  const {isSuccess,refetch} = useQuery({
    queryKey: ["logoutcog"],
    queryFn:LogoutFn,
    enabled:false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.toggle("backdrop-blur", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(isSuccess){
      nav('/')
    }
  }, [isSuccess])
  

  return (
    <nav className="bg-transparent transition-all duration-600 ease-in-out fixed top-0 w-full h-fit z-50 p-2 border-b-[1px] border-slate-700/20 max-md:p-0">
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div className="w-full flex justify-between items-center px-11 max-md:hidden">
          <a href="/landpage" className="m-1">
            <img src={Penus} alt="Logo" className="w-16" />
          </a>
          <div className="flex flex-col">
            <h3 className="text-3xl font-extrabold text-putih-putih">
              SMK <span className="text-merah-penus">PLUS</span> PELITA NUSANTARA
            </h3>
          </div>
          <div className="relative group flex flex-col items-center h-auto w-auto">
            <img
              src={User}
              id="showNav"
              className="rounded-full  cursor-pointer max-md:w-9"
              alt="user"
            />
            <aside className="flex flex-col items-center overflow-hidden bg-putih-putih max-h-0 top-14 rounded-xl absolute group-hover:max-h-60 group-hover:px-6 group-hover:py-2 duration-500 transition-all ease-in-out">
              <p className="font-bold">{user?.user?.Nama}</p>
              <hr className="w-[130%] border border-black mb-2" />
              <div onClick={()=>refetch()} className="flex w-[140%] items-center gap-2 hover:cursor-pointer">
                <LogOut />
              </div>
            </aside>
          </div>
        </div>
        {/* Mobile Design */}
        <div className="flex justify-center w-full md:hidden">
          <div className="flex relative pt-8 scale-90">
            <a href="/landpage" className="">
              <img src={Penus} alt="Logo" className="w-11" />
            </a>
            <div className="flex flex-col">
              <h3 className="text-lg font-extrabold leading-7 text-putih-putih">
                SMK <span className="text-merah-penus">PLUS</span> PELITA NUSANTARA
              </h3>
              <i className="text-sm text-white leading-3">Success By Character</i>
            </div>
          </div>
          <div className="relative group flex flex-col mt-2 items-center h-auto w-auto">
            <img
              src={User}
              id="showNav"
              className="rounded-full ml-1 cursor-pointer max-md:w-9"
              alt="user"
            />
            <aside className="flex flex-col items-center overflow-hidden bg-putih-putih max-h-0 top-14 rounded-xl absolute group-hover:max-h-60 group-hover:px-6 group-hover:py-2 duration-500 transition-all ease-in-out">
              <p className="font-bold">{user?.user?.Nama}</p>
              <hr className="w-[130%] border border-black mb-2" />
              <div className="flex w-[140%] items-center gap-2 hover:cursor-pointer">
                <img alt="hai" className="w-[20%] scale-x-[-1]" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Head;
