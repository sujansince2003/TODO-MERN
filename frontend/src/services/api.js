//axios setup
//This service will handle requests to the backend and automatically include the token in headers when it's available.

import axios from "axios";

//Baseurl of backend
const API_BASEURL = "http://localhost:3001/api";

//creating axios instance
const api = axios.create({
  baseURL: API_BASEURL,
});
//// Add a token to the Authorization header if it exists.doing this wil send Authorization header in each and every request done by our frontend with axios

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
