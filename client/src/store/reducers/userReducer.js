import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});
export default userReducer.reducer;
export const { setUser } = userReducer.actions;
