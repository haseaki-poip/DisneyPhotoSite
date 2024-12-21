import { combineReducers } from "@reduxjs/toolkit";

import photoDetailReducer from "./PhotoDetail/photoDetailSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
import likedRecommendReducer from "./LikedRemmends/likedRecommendSlice";

export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
  likedRecommend: likedRecommendReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
