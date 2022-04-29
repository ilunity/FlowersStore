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
    SET_BASKET_ITEM_COUNT,
    SET_SUM_BASKET,
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
            return {isFetching: false, payload: action.payload};
        case FETCH_ITEMS:
            return {...state, isFetching: true}
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
            return {...state, registration: action.payload};
        case SET_LOGIN_MODAL_STATUS:
            return {...state, login: action.payload};
        default:
            return state;
    }
};

const basketReducer = (
    state = {
        basketItems:[],
        totalPrice: 0,
        isLoadingBasketItems: true,
    },
    action
) => {
    switch (action.type) {
        case ADD_ITEM_BASKET:
            const newItem = {basketCount: 1, item: action.payload};
            return {...state, basketItems: [...state.basketItems, newItem]};
        case DELETE_ITEM_BASKET:
            const newBasketItems = state.basketItems.filter(basketItem => basketItem.item.id !== action.payload);
            return {...state, basketItems: newBasketItems};
        case SET_ITEM_BASKET:
            return {...state, basketItems: action.payload};
        case SET_SUM_BASKET:
            return {...state, totalPrice: action.payload};
        case SET_LOADING_BASKET:
            return {...state, isLoadingBasketItems: action.payload};
        case SET_BASKET_ITEM_COUNT:
            const basketItems = state.basketItems.map((basketItem) => {
                if (basketItem.item.id === action.payload.id) {
                    basketItem.basketCount = action.payload.value;
                }
                return basketItem;
            })
            return {...state, basketItems}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items: itemsReducer,
    activeModals: modalsReducer,
    filters: filtersReducer,
    isAuth: authReducer,
    user: userReducer,
    basket: basketReducer,
});

export {rootReducer};