import axios from "axios";

export const API_URL = "https://api.uphold.com/v0/t";

const http = axios.create({
  baseURL: API_URL,
});

export default http;
