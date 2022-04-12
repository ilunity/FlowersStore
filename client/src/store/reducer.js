import {
    SET_USER,
    DELETE_USER,
    SET_AUTH,
    SET_ITEMS,
    SET_FILTERS,
    ADD_FILTER,
    DELETE_FILTER,
    SET_REG_MODAL_STATUS, SET_LOGIN_MODAL_STATUS
} from "./actions";
import {combineReducers} from "redux";
import {FETCH_ITEMS} from "./asyncActions";

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case DELETE_USER:
            return null;
        default:
            return state;
    }
};

const authReducer = (state = false, action) => {
    switch (action.type) {
        case SET_AUTH:
            return action.payload;
        default:
            return state;
    }
};

const itemsReducer = (
    state = {
        isFetching: true,
        payload: [],
    },
    action
) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                isFetching: false,
                payload: action.payload,
            };
        case FETCH_ITEMS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        default:
            return state;
    }
};

const filtersReducer = (
    state = [],
    action
) => {
    switch (action.type) {
        case SET_FILTERS:
            return action.payload;
        case ADD_FILTER:
            return [
                ...state,
                action.payload
            ];
        case DELETE_FILTER:
            return state.filter((filter) => {
                return filter !== action.payload;
            });
        default:
            return state;
    }
};

const modalsReducer = (
    state = {
        registration: false,
        login: false,
    },
    action
) => {
    switch (action.type) {
        case SET_REG_MODAL_STATUS:
            return Object.assign({}, state, {
                registration: action.payload,
            });
        case SET_LOGIN_MODAL_STATUS:
            return Object.assign({}, state, {
                login: action.payload,
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items: itemsReducer,
    activeModals: modalsReducer,
    filters: filtersReducer,
    isAuth: authReducer,
    user: userReducer,
});

export {rootReducer};