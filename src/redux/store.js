import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import footerReducer from "./footer/footerSlice";
export const store = configureStore({
  reducer: {
    cartDrawer: cartReducer,
    footerDatas: footerReducer,
  },
});
