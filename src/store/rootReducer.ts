import { combineReducers } from "@reduxjs/toolkit";

import photoDetailReducer from "./PhotoDetail/photoDetailSlice";

export const rootReducer = combineReducers({
  photoDetail: photoDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
