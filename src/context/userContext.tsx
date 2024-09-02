import React, { createContext, useContext, useEffect, useState, } from "react";
import { User } from "../types/types";
import { getCurrentUser } from "../api/api";

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  function onUserSuccess(res: User | null) {
    setUser(res)
  }

  useEffect(() => {
    if (user !== null) {
      return () => {
        alert("udah ada bejir")
      }
    }

    try {
      alert("wah ngerun nih")
      getCurrentUser().then(onUserSuccess).catch(() => console.log("hehe"))
    } catch (error) {
      throw new Error(`${error}`)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
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
