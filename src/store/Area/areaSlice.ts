import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "../api-base";
import { Park } from "../type";

export type Area = {
  id: string;
  name: string;
};

export type AreaData = {
  [key in Park]: Area[];
};

export type PhotoDetailResult = {
  result: AreaData | null;
  isError: boolean;
};

export const ssgAreas = async (): Promise<PhotoDetailResult> => {
  try {
    const response = await apiBase.get(`/areas`).then((res) => res.data);
    return {
      result: response,
      isError: false,
    };
  } catch (error) {
    return {
      result: null,
      isError: true,
    };
  }
};

const areaSlice = createSlice({
  name: "photoDetail",
  initialState: {
    result: null,
    isError: false,
  } as PhotoDetailResult,
  reducers: {
    setAreaData: (state, action: PayloadAction<AreaData>) => {
      state.result = action.payload;
    },
  },
});

export const { setAreaData } = areaSlice.actions;
export default areaSlice.reducer;
