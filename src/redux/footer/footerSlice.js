import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footerDatas: null,
  isApiCompleted: false,
};

export const footerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeFooterDatas: (state, action) => {
      state.footerDatas = action.payload;
    },
    changeApiCallStatus: (state, action) => {
      state.isApiCompleted = action.payload;
    },
  },
});
export const { changeFooterDatas, changeApiCallStatus } = footerSlice.actions;

export default footerSlice.reducer;
