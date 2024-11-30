import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";

export type PhotoDetail = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: {
    longitude: number;
    latitude: number;
  };
  area: {
    id: string;
    name: string;
  };
  like: number;
  park: string;
  isNight: boolean;
  createdAt: string;
};

export type PhotoDetailResult = {
  result: PhotoDetail | null;
  isError: boolean;
};

const initialState: PhotoDetailResult = {
  result: null,
  isError: false,
};

export const ssrPhotoDetail = async (
  id: string
): Promise<PhotoDetailResult> => {
  try {
    const response = await apiBase.get(`/detail/${id}`).then((res) => res.data);
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

const photoDetailSlice = createSlice({
  name: "photoDetail",
  initialState: initialState,
  reducers: {
    setPhotoDetail: (state, action: PayloadAction<PhotoDetail>) => {
      state.result = action.payload;
    },
  },
});

export const { setPhotoDetail } = photoDetailSlice.actions;
export default photoDetailSlice.reducer;
