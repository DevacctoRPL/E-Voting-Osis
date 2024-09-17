import { LoginUserReq, VoteReq } from "../types/types";
import {apicall} from "../utils/axios";

export const cobarequest = async () => apicall("/")
export const LoginFn = async (LoginData:LoginUserReq) => apicall("/loginuser",LoginData)
export const VoteFn = async (VoteCreds:VoteReq) => apicall("/vote",VoteCreds)
export const getCurrentUser = async () => apicall("/currentUser")
export const LogoutFn = async () => apicall('/logout')
export const datares = async () => apicall('/datares')
