import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMarket } from "@/shared";

interface MarketState {
  markets: IMarket[];
}

const initialState = {} as MarketState;

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarkets(state, action: PayloadAction<IMarket[]>) {
      state.markets = action.payload;
    },
    addMarket(state, action: PayloadAction<IMarket>) {
      state.markets = [...state.markets, action.payload];
    },
    updateMarket(state, action: PayloadAction<IMarket>) {
      state.markets = state.markets.map((market) =>
        market._id === action.payload._id ? action.payload : market
      );
    },
    removeMarket(state, action: PayloadAction<string>) {
      state.markets = state.markets.filter(
        (market) => market._id !== action.payload
      );
    },
  },
});

export const {
  setMarkets,
  addMarket,
  updateMarket,
  removeMarket,
} = marketSlice.actions;

export default marketSlice.reducer;
