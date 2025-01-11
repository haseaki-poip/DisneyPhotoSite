import { combineReducers } from "@reduxjs/toolkit";

import areaPhotosReducer from "./AreaPhotos/areaPhotoSlice";
import likedRecommendsReducer from "./likedRecommends/likedRecommendsSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
import photoDetailReducer from "./PhotoDetail/photoDetailSlice";
import areaReducer from "./Area/areaSlice";

export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
  likedRecommends: likedRecommendsReducer,
  areaPhotos: areaPhotosReducer,
  areas: areaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
