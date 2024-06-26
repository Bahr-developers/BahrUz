import axios from "axios";

import { SERVER_BASE_URL } from "../constants/server.constants";

export const customAxios = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 10000,
});
