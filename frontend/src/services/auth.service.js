import Cookies from "js-cookie";
import { ApiRequest } from "@/services/index";

const login = (email, password) => {
  console.log(email, password);
  return ApiRequest.post("/auth/login", {
    email,
    password,
  });
};

const get = () => {
  return ApiRequest.get("/users");
};

const signup = ({ firstName, lastName, userName, email, password }) => {
  return ApiRequest.post("/auth/register", {
    first_name: firstName,
    last_name: lastName,
    user_name: userName,
    email,
    password,
  });
};

const logout = () => {
  return ApiRequest.get("/logout");
};

const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
const setAccessToken = (userLogged) => {
  Cookies.set("userLogged", JSON.stringify(userLogged), {
    expires: inFifteenMinutes,
  });
};

const getAccessToken = () => {
  const profile = Cookies.get("userLogged");
  return profile ? JSON.parse(profile) : null;
};

const deleteAccessToken = () => {
  Cookies.remove("userLogged");
};

export {
  login,
  signup,
  logout,
  get,
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
};
