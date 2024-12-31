import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "../api-base";
import { Park } from "../type";

export type Area = {
  id: string;
  name: string;
};

export type AreasResult = {
  [key in Park]: Area[];
};

export const ssgAreas = async (): Promise<AreasResult> => {
  try {
    const response = await apiBase.get(`/areas`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch areas in SSG");
  }
};
