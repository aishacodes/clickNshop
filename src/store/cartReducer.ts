import { createSlice } from "@reduxjs/toolkit";
import { ICartReduxState } from "../utils";

const initialState: ICartReduxState = {
  cart: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    buyProduct(state, action) {
      return { ...state, cart: state.cart.concat(action.payload) };
    },
    removeProduct(state, action) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    },
  },
});

export const { buyProduct } = cartReducer.actions;
export default cartReducer.reducer;
