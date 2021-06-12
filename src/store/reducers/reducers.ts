import { combineReducers } from "@reduxjs/toolkit";

import login from "./login.reducers";
import market from "./market.reducers";

export const rootReducer = combineReducers({
  login,
  market,
});

export type RootStore = ReturnType<typeof rootReducer>;
