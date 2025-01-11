import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData, SortType } from "../type";

export type LikedRecommends = { results: PhotoDetail[] };
export type LikedRecommendsResult = PhotoListData & {
  isError?: boolean;
  isLoading: boolean;
};

const initialState: LikedRecommendsResult = {
  results: [],
  isLoading: false,
};

export const csrLikedRecommends = createAsyncThunk<
  LikedRecommendsResult,
  SortType
>("likedRecommends/fetchLikedRecommends", async (sort: SortType) => {
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

const likedRecommendsSlice = createSlice({
  name: "likedRecommends",
  initialState: initialState,
  reducers: {
    setLikedRecommends: (state, action: PayloadAction<LikedRecommends>) => {
      state.results = action.payload.results;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(csrLikedRecommends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(csrLikedRecommends.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isError = action.payload.isError;
      state.isLoading = false;
    });
    builder.addCase(csrLikedRecommends.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setLikedRecommends } = likedRecommendsSlice.actions;
export default likedRecommendsSlice.reducer;
