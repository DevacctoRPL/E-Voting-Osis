import React, { createContext, useContext, useEffect, useState, } from "react";
import { User } from "../types/types";
import { getCurrentUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const nav = useNavigate()
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true)

  function onUserSuccess(res: User | null) {
    setLoading(!loading)
    setUser(res)
  }

  useEffect(() => {
    try {
      getCurrentUser().then(onUserSuccess).catch(() => console.log("hehe"))
    } catch (error) {
      throw new Error(`${error}`)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
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
