import { createSlice } from "@reduxjs/toolkit";

const initState = "";

export const filterSlice = createSlice({
    name: "filter",
    initialState: initState,
    reducers: {
        // Set filter to the value of the radio button that was just clicked
        set_filter: (state, action) => {
            return action.payload;
        },
        // Set the filter to empty string
        clear_filter: (state, action) => {
            return initState;
        }
    }
});

export const { set_filter, clear_filter } = filterSlice.actions;

export default filterSlice.reducer;