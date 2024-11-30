import { createSlice } from "@reduxjs/toolkit";

import { apiBase } from "@/store/api-base";
import { PhotoDetail } from "../PhotoDetail/photoDetailSlice";
import { PhotoListData } from "../type";

export type NearRecommends = { results: PhotoDetail[] };
export type NearRecommendsResult = PhotoListData & {
  isError: boolean;
};

export const csrNearRecommends = async (
  areaId: string
): Promise<NearRecommendsResult> => {
  try {
    const response = await apiBase
      .get("/list", { params: { areaId: areaId } })
      .then((res) => res.data);
    return {
      ...response,
      isError: false,
    };
  } catch (error) {
    return {
      results: [],
      isError: true,
    };
  }
};
