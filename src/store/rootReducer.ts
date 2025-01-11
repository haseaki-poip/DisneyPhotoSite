import { combineReducers } from "@reduxjs/toolkit";

import areaPhotosReducer from "./AreaPhotos/areaPhotoSlice";
import likedRecommendReducer from "./likedRecommends/likedRecommendSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
import photoDetailReducer from "./PhotoDetail/photoDetailSlice";
import areaReducer from "./Area/areaSlice";

export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
  likedRecommend: likedRecommendReducer,
  areaPhotos: areaPhotosReducer,
  areas: areaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
