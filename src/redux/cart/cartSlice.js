import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDrawerFlag: false,
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
