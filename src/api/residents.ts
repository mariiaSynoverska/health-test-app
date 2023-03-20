import axios from "axios";

import { config } from "./config"
import { authHeader } from "../service/auth";
import { TDataResident } from "../types";

export const getResidents = async () => {
  try {
    const headers = authHeader();

    if (headers) {
      const { data } = await axios.get(`${config.API_URL}/residents`, { headers });
      return data;
    } else {
      throw new Error("User unauthorized")
    }
  } catch (e) {
  }
}

export const createResident = async (program: Omit<TDataResident, "attendance" | "id" | "applicantId" | "createdAt" | "updatedAt" | "preferredName">) => {
  try {
    const headers = authHeader();

    if (headers) {
      const { data } = await axios.post(`${config.API_URL}/residents`, { ...program }, { headers });
      return data;
    } else {
      throw new Error("User unauthorized")
    }
  } catch (e) {
  }
}