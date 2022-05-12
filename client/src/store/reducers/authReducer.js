import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "isAuth",
    initialState: { auth: false },
    reducers: {
        setAuth(state, action) {
            state.auth = action.payload;
        },
    },
});
export default authReducer.reducer;
export const { setAuth } = authReducer.actions;
