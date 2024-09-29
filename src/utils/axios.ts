import axios from "axios";
import { apicalltype } from "../types/types";

const apiclient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
})

export const apicall:apicalltype = async (path, data?) => {
  if (data) {
    const res = apiclient.post(path, data)
    return res.then((r) => r.data)
  }
  const res = apiclient.get(path)
  return res.then((r) => r.data)
}
