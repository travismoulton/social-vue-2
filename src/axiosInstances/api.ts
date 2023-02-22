import axios from "axios";

const apiBase = "http://127.0.0.1:8080";

export default axios.create({
  baseURL: apiBase,
  timeout: 3000,
  withCredentials: true,
});
