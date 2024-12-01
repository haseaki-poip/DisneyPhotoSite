import { combineReducers } from "@reduxjs/toolkit";

import photoDetailReducer from "./PhotoDetail/photoDetailSlice";
import nearRecommendsReducer from "./NearRecommends/nearRecommendsSlice";
export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
  nearRecommends: nearRecommendsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
