import { combineReducers } from "@reduxjs/toolkit";

import login from "./login.reducers";

export const rootReducer = combineReducers({
  login,
});

export type RootStore = ReturnType<typeof rootReducer>;
