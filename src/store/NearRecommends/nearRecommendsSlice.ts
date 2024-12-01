import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData } from "../type";

export type NearRecommends = { results: PhotoDetail[] };
export type NearRecommendsResult = PhotoListData & {
  isError?: boolean;
  isLoading: boolean;
};

const initialState: NearRecommendsResult = {
  results: [],
  isLoading: false,
};

export const csrNearRecommends = createAsyncThunk<NearRecommendsResult, string>(
  "nearRecommends/fetchNearRecommends",
  async (areaId: string) => {
    try {
      const response = await apiBase
        .get("/list", { params: { areaId: areaId } })
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
  }
);

const nearRecommendsSlice = createSlice({
  name: "nearRecommends",
  initialState: initialState,
  reducers: {
    setNearRecommends: (state, action: PayloadAction<NearRecommends>) => {
      state.results = action.payload.results;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(csrNearRecommends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(csrNearRecommends.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isError = action.payload.isError;
      state.isLoading = false;
    });
    builder.addCase(csrNearRecommends.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setNearRecommends } = nearRecommendsSlice.actions;
export default nearRecommendsSlice.reducer;
