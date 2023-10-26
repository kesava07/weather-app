import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        search: searchSlice
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})