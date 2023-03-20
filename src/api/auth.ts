import axios from "axios";

import { config } from "./config"

export const getToken = async (email: string) => {
  try {
    const response = await axios.post(`${config.API_URL}/start`, { email });

    if (response.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    }

  } catch (e) {

  }
}