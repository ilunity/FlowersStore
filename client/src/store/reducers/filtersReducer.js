import { createSlice } from "@reduxjs/toolkit";

const filtersReducer = createSlice({
    name: "filters",
    initialState: {
        filters: [],
    },
    reducers: {
        setFilters(state, action) {
            state.filters = action.payload;
        },
        addFilter(state, action) {
            if (!state.filters.includes(action.payload)) {
                state.filters.push(action.payload);
            }
        },
        deleteFilter(state, action) {
            state.filters = state.filters.filter(
                filter => filter !== action.payload
            );
        },
    },
});
export default filtersReducer.reducer;
export const { setFilters, addFilter, deleteFilter } = filtersReducer.actions;
