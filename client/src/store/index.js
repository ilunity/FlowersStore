import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import basketReducer from "./reducers/basketReducer";
import filtersReducer from "./reducers/filtersReducer";
import modalsReducer from "./reducers/modalsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    activeModals: modalsReducer,
    filters: filtersReducer,
    isAuth: authReducer,
    user: userReducer,
    basket: basketReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
