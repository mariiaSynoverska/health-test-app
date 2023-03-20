import axios from "axios";

import { config } from "./config"
import { authHeader } from "../service/auth";
import { TProgram } from "../types";

export const getPrograms = async () => {
  try {
    const headers = authHeader();

    if (headers) {
      const { data } = await axios.get(`${config.API_URL}/programs`, { headers });
      return data;
    } else {
      throw new Error("User unauthorized")
    }
  } catch (e) {
  }
}

export const createProgram = async (program: Omit<TProgram, "attendance" | "id">) => {
  try {
    const headers = authHeader();

    if (headers) {
      const { data } = await axios.post(`${config.API_URL}/programs`, { ...program }, { headers });
      return data;
    } else {
      throw new Error("User unauthorized")
    }
  } catch (e) {
  }
}