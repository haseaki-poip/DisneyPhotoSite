import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData, SortType } from "../type";

export type LikedRecommend = { results: PhotoDetail[] };
export type LikedRecommendResult = PhotoListData & {
  isError?: boolean;
  isLoading: boolean;
};

const initialState: LikedRecommendResult = {
  results: [],
  isLoading: false,
};

export const csrLikedRecommend = createAsyncThunk<
  LikedRecommendResult,
  SortType
>("likedRecommend/fetchLikedRecommend", async (sort: SortType) => {
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

const likedRecommendSlice = createSlice({
  name: "likedRecommend",
  initialState: initialState,
  reducers: {
    setLikedRecommend: (state, action: PayloadAction<LikedRecommend>) => {
      state.results = action.payload.results;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(csrLikedRecommend.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(csrLikedRecommend.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isError = action.payload.isError;
      state.isLoading = false;
    });
    builder.addCase(csrLikedRecommend.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setLikedRecommend } = likedRecommendSlice.actions;
export default likedRecommendSlice.reducer;
