import { combineReducers } from "@reduxjs/toolkit";

import areaPhotosReducer from "./AreaPhotos/areaPhotoSlice";
import likedRecommendReducer from "./LikedRemmends/likedRecommendSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
import photoDetailReducer from "./PhotoDetail/photoDetailSlice";

export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
  likedRecommend: likedRecommendReducer,
  areaPhotos: areaPhotosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
