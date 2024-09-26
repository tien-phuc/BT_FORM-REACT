import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SVList: [],
  SVEdit: null,
};

export const { reducer: btFormReducer, actions: btFormActions } = createSlice({
  name: "btForm",
  initialState,
  reducers: {
    setSVList: (state, action) => {
      state.SVList.push(action.payload);
    },
    deleteSV: (state, action) => {
      state.SVList = state.SVList.filter(
        (item) => item.maSV !== action.payload
      );
    },
    editSV: (state, { payload }) => {
      state.SVEdit = payload;
    },
    updateSV: (state, { payload }) => {
      state.SVList = state.SVList.map((item) => {
        if (item.maSV === payload.maSV) return payload;
        return item;
      });
      state.SVEdit = null;
    },
    clearSVEdit: (state) => {
      state.SVEdit = null;
    },
  },
});
