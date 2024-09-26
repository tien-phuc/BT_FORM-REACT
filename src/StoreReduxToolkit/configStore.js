import { configureStore } from "@reduxjs/toolkit";
import { btFormReducer } from "./BTForm/SliceForm";

export const store = configureStore({
  reducer: {
    btFormReducer,
  },
});
