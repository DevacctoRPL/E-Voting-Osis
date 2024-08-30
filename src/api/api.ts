import { LoginUserReq } from "../types/api/requests";
import { apiclient } from "../utils/axios";

export const cobarequest = async () => {
  const response = apiclient.get('/');
  const message = response.then(r => r.data)
  return message;
}

export const LoginFn = async (LoginData: LoginUserReq) => {
  const LoginResponse = apiclient.post('/loginuser', LoginData)
  return LoginResponse.then((r) => r.data)
}

export const getCurrentUser = async () => {
  const res = apiclient.get('/currentUser');
  return res.then((r) => r.data)
}

export const LogoutFn = async () => {
  const res = apiclient.get('/logout')
  return res.then((r) => r.data)
}
