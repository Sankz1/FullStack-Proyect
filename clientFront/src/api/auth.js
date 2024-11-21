import axios from "axios";

const backEnd = "http://localhost:3000/back";
export const requestRegister = (User) =>
  axios.post(`${backEnd}/register`, User);
