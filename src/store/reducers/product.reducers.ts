import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/shared";

interface ProductState {
  products: IProduct[];
}

const initialState = {} as ProductState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload];
    },
    updateProduct(state, action: PayloadAction<IProduct>) {
      state.products = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  removeProduct,
} = productSlice.actions;

export default productSlice.reducer;
