import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotalCount: 0,
};

export const cartCount = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    changeCartCount: (state, action) => {
      state.cartTotalCount = action.payload;
    },
  },
});
export const { changeCartCount } = cartCount.actions;

export default cartCount.reducer;
