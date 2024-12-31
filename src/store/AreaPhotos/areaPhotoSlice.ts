import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData } from "../type";

export type AreaPhotos = { results: PhotoDetail[] };
export type AreaPhotosResult = PhotoListData & {
  isError?: boolean;
  isLoading: boolean;
};

const initialState: AreaPhotosResult = {
  results: [],
  isLoading: false,
};

type RecommendParams = {
  areaId: string;
  limit?: number;
};

export const csrAreaPhotos = createAsyncThunk<
  AreaPhotosResult,
  RecommendParams
>("areaPhotos/fetchAreaPhotos", async (params) => {
  try {
    const response = await apiBase
      .get("/list", { params: params })
      .then((res) => res.data);
    return {
      ...response,
      isError: false,
      isLoading: false,
    };
  } catch (error) {
    return {
      results: [],
      isError: true,
      isLoading: false,
    };
  }
});

const areaPhotosSlice = createSlice({
  name: "areaPhotos",
  initialState: initialState,
  reducers: {
    setAreaPhotos: (state, action: PayloadAction<AreaPhotos>) => {
      state.results = action.payload.results;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(csrAreaPhotos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(csrAreaPhotos.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isError = action.payload.isError;
      state.isLoading = false;
    });
    builder.addCase(csrAreaPhotos.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setAreaPhotos } = areaPhotosSlice.actions;
export default areaPhotosSlice.reducer;
