import React, { createContext, useContext, useEffect, useState, } from "react";
import { User } from "../types/types";
import { getCurrentUser } from "../api/api";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export interface UserContextType {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = () => {
  const [user, setUser] = useState<User | null | undefined>();
  const nav = useNavigate()
  function onUserSuccess(res: User | null | undefined) {
    console.log('yez')
    setUser(res)
  }

  function onUserError() {
    console.error('error')
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
      console.log("yep")
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

export function useAuth() {
  const user = useContext(UserContext)
  if (!user) {
    throw new Error("woi bangsat kutu loncat")
  }

  return user;
}
