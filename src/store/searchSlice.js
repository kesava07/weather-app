import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "SEARCH",
    initialState: "",
    reducers: {
        setSearch: (_, action) => {
            return action.payload
        }
    }
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer