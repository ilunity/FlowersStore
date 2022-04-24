import {
    SET_USER,
    DELETE_USER,
    SET_AUTH,
    SET_ITEMS,
    SET_FILTERS,
    ADD_FILTER,
    DELETE_FILTER,
    SET_REG_MODAL_STATUS,
    SET_LOGIN_MODAL_STATUS,
    SET_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    ADD_ITEM_BASKET,
    INCREASE_BASKET_ITEM_COUNT,
    DECREASE_BASKET_ITEM_COUNT,
    INCREASE_SUM,
    DECREASE_SUM,
    SET_SUM,
    SET_LOADING_BASKET,
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
            if (!state.includes(action.payload)) {
                return [
                    ...state,
                    action.payload
                ];
            }
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

const basketReducer = (
    state = [],
    action
) => {
    switch (action.type) {
        case ADD_ITEM_BASKET:
            const newItem = {...action.payload, basketCount: 1};
            return [...state, newItem];
        case DELETE_ITEM_BASKET:
            return state.filter(item => item.id !== action.payload);
        case SET_ITEM_BASKET:
            return action.payload;
        case INCREASE_BASKET_ITEM_COUNT:
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.basketCount+=1
                }
                return item;
            })
        case DECREASE_BASKET_ITEM_COUNT:
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.basketCount-=1
                }
                return item;
            })
        default:
            return state;
    }
}

const sumReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREASE_SUM:
            return state + action.payload;
        case DECREASE_SUM:
            return state - action.payload;
        case SET_SUM:
            return action.payload;
        default:
            return state;
    }
};

const isLoadingBasketItemsReducer = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING_BASKET:
            return action.payload;
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
    basket: basketReducer,
    sum: sumReducer,
    isLoadingBasketItems: isLoadingBasketItemsReducer
});

export {rootReducer};