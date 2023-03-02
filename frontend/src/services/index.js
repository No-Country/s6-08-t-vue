import axios from "axios";

const URL_BASE_API = import.meta.env.VITE_URL_BASE_API;

const ApiRequest = axios.create({
  baseURL: URL_BASE_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

ApiRequest.interceptors.request.use(
  function (config) {
    if (config.url.includes("auth")) return config;
    const token = "test"; // get from pinia or cookies
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { ApiRequest };
