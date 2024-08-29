import axios from "axios";

export const apiclient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
})
