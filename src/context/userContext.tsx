import React, { createContext, useEffect, useState, } from "react";
import { User } from "../types/types";
import { getCurrentUser } from "../api/api";

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true)
  function onUserSuccess(res: User | null) {
    setUser(res)
    setLoading(!loading)
  }
  function onError(err: any) {
    throw new Error(`${err}`)
  }
  useEffect(() => {
    try {
      getCurrentUser().then(onUserSuccess).catch(onError)
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
