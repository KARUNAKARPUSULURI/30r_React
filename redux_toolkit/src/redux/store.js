import { configureStore } from "@reduxjs/toolkit";
import changeName from "./counterSlice";

export const store = configureStore({
    reducer : {
        changeName : changeName
    }
})