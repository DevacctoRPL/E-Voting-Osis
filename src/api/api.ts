import { LoginUserReq } from "../types/api/requests";
import {apicall} from "../utils/axios";

export const cobarequest = async () => apicall("/")
export const LoginFn = async (LoginData:LoginUserReq) => apicall("/loginuser",LoginData)
export const getCurrentUser = async () => apicall("/currentUser")
export const LogoutFn = async () => apicall('/logout')
