import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

interface voteContextType {
  votedfs: "OSIS" | "MPK" | undefined,
  setVotedFor: React.Dispatch<React.SetStateAction<"OSIS" | "MPK" | undefined>>
}

export const votedContext = createContext<voteContextType | undefined>(undefined)

export function VoteProvider() {
  const [votedfs, setVotedFor] = useState<"OSIS" | "MPK">()

  return (
    <votedContext.Provider value={{ votedfs, setVotedFor }}>
      <Outlet />
    </votedContext.Provider>
  )
}
