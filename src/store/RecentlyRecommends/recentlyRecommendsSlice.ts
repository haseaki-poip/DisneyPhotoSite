import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData, SortType } from "../type";

export type RecentlyRecommends = { results: PhotoDetail[] };
export type RecentlyRecommendsResult = PhotoListData & {
  isError?: boolean;
  isLoading: boolean;
};

const initialState: RecentlyRecommendsResult = {
  results: [],
  isLoading: false,
};

export const csrRecentlyRecommends = createAsyncThunk<
  RecentlyRecommendsResult,
  SortType
>("recentlyRecommends/fetchRecentlyRecommends", async (sort: SortType) => {
  try {
    const response = await apiBase
      .get("/list", { params: { sort: sort } })
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

const recentlyRecommendsSlice = createSlice({
  name: "recentlyRecommends",
  initialState: initialState,
  reducers: {
    setRecentlyRecommends: (
      state,
      action: PayloadAction<RecentlyRecommends>
    ) => {
      state.results = action.payload.results;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(csrRecentlyRecommends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(csrRecentlyRecommends.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isError = action.payload.isError;
      state.isLoading = false;
    });
    builder.addCase(csrRecentlyRecommends.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setRecentlyRecommends } = recentlyRecommendsSlice.actions;
export default recentlyRecommendsSlice.reducer;
