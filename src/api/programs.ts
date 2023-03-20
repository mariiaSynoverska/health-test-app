import axios from "axios";

import { config } from "./config"
import { authHeader } from "../service/auth";
import { EStatus, TProgram } from "../types";

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
    const error = e as { message: string };
    throw new Error(error.message);
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
    const error = e as { message: string };
    throw new Error(error.message);
  }
}

export const attendResident = async ({ programId, residentId, status }: { programId: number, residentId: number, status: EStatus }) => {
  try {
    const headers = authHeader();

    if (headers) {
      const { data } = await axios.post(`${config.API_URL}/programs/${programId}/attend`, { residentId, status }, { headers });
      return data;
    } else {
      throw new Error("User unauthorized")
    }
  } catch (e) {
    const error = e as { message: string };
    console.log(error.message)
  }
}