import React, { createContext,  useEffect, useState, } from "react";
import { User } from "../types/types";
import { getCurrentUser } from "../api/api";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

interface UserContextType {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = () => {
  const [user, setUser] = useState<User | null >();
  const nav = useNavigate()
  function onUserSuccess(res: User | null ) {
    setUser(res)
  }

  function onUserError(err:any) {
    console.error('error',err)
    nav('/')
  }

  useEffect(() => {
    if (user !== null && user !== undefined) {
      return () => {
        console.log("hi")
      }
    }

    try {
      getCurrentUser().then(onUserSuccess).catch(onUserError)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  )
};

