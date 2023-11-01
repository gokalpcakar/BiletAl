import axios from "axios";


//interceptor add


export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 5000,
});
