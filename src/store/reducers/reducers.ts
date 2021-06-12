import { combineReducers } from "@reduxjs/toolkit";

import login from "./login.reducers";
import market from "./market.reducers";
import product from "./product.reducers";

export const rootReducer = combineReducers({
  login,
  market,
  product,
});

export type RootStore = ReturnType<typeof rootReducer>;
