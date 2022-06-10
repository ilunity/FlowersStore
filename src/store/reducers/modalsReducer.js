import { createSlice } from "@reduxjs/toolkit";

const modalsReducer = createSlice({
    name: "activeModals",
    initialState: {
        registration: false,
        login: false,
    },
    reducers: {
        setRegModalStatus(state, action) {
            state.registration = action.payload;
        },
        setLoginModalStatus(state, action) {
            state.login = action.payload;
        },
    },
});
export default modalsReducer.reducer;
export const { setRegModalStatus, setLoginModalStatus } = modalsReducer.actions;
