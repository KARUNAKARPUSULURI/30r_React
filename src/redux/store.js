import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apislice";
  // ✅ Import apiSlice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // ✅ Add API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // ✅ Add API middleware
});
