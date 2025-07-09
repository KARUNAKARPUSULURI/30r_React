import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : "karunakar"
}

const nameSlice = createSlice({
    name : "changeName",
    initialState,
    reducers : {
        changeName : (state) => {
            state.name = "chaitanya"
        }
    }
})

export const {changeName} = nameSlice.actions;

export default nameSlice.reducer;

