import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";

export const Store = configureStore({
    reducer : {
        AddStore : DataSlice
    }
})

