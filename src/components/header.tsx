import React, { useContext, useEffect } from "react";

import Penus from "/assets/penus.png";
import { UserContext } from "../context/userContext";
import { LogOut, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { LogoutFn } from "../api/api";
import { useNavigate } from "react-router-dom";

const Head: React.FC = () => {
  const user = useContext(UserContext);
  const nav = useNavigate()

  const { isSuccess, refetch } = useQuery({
    queryKey: ["LogoutFn"],
    gcTime: 0,
    queryFn: LogoutFn,
    enabled: false,
  })

  useEffect(() => {
    console.log(user?.user)
  }, [user])
  

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
    if (isSuccess) {
      user?.setUser(null)
      nav('/', { replace:true})
    }
  }, [isSuccess])


  return (
    <nav className="bg-transparent transition-all duration-600 ease-in-out fixed top-0 w-full h-fit z-50 p-2 border-b-[1px] border-slate-700/20 max-md:p-0">
      <div className=" p-1 flex justify-between items-center">
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
            <div className="w-fit bg-merah-penus border border-putih-putih p-1 rounded-full">
              <User className="text-putih-putih" />
            </div>
            <aside className="flex flex-col items-center overflow-hidden bg-putih-putih max-h-0 top-14 rounded-xl absolute group-hover:max-h-60 group-hover:px-6 group-hover:py-2 duration-500 transition-all ease-in-out">
              <p className="font-bold">{user?.user?.NIU}</p>
              <hr className="w-[130%] border border-black mb-2" />
              <LogOut className="hover:cursor-pointer" onClick={()=> refetch()} />
            </aside>
          </div>
        </div>
        {/* Mobile Design */}
        <div className="w-full flex justify-between items-center md:hidden px-3 pb-5 pt-3">
          <div className="flex relative scale-90">
            <a href="/landpage" className="pt-2">
              <img src={Penus} alt="Logo" className="w-11" />
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-extrabold leading-7 text-putih-putih">
              SMK <span className="text-merah-penus">PLUS</span> PELITA NUSANTARA
            </h3>
            <i className="text-sm text-white leading-3">Success By Character</i>
          </div>
          <div className="relative group flex flex-col mt-2 items-center h-auto w-auto">
            <div className="w-fit bg-merah-penus border border-putih-putih p-1 rounded-full">
              <User className="text-putih-putih" />
            </div>
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
