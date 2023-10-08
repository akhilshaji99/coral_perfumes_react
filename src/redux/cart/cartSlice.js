import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDrawerFlag: false,
  cartCount:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCartDrawerFlag: (state, action) => {
      state.cartDrawerFlag = action.payload;
    },
  },
});
export const { changeCartDrawerFlag } = cartSlice.actions;

export default cartSlice.reducer;
