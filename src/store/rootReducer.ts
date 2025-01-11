import { combineReducers } from "@reduxjs/toolkit";

import areaPhotosReducer from "./AreaPhotos/areaPhotoSlice";
import likedRecommendsReducer from "./LikedRecommends/likedRecommendsSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
import photoDetailReducer from "./PhotoDetail/photoDetailSlice";
import areaReducer from "./Area/areaSlice";
import recentlyRecommendsReducer from "./RecentlyRecommends/recentlyRecommendsSlice";
export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
  likedRecommends: likedRecommendsReducer,
  recentlyRecommends: recentlyRecommendsReducer,
  areaPhotos: areaPhotosReducer,
  areas: areaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
