const createAction = (type) => (payload) => {
    return {
        type,
        payload,
    }
};

const createSimpleAction = (type) => () => {
    return {type}
};


const SET_USER = "SET_USER";
const DELETE_USER = "DELETE_USER";
const SET_AUTH = "SET_AUTH";
const setUser = createAction(SET_USER);
const deleteUser = createSimpleAction(DELETE_USER);
const setAuth = createAction(SET_AUTH);


const SET_ITEMS = "SET_ITEMS";
const setItems = createAction(SET_ITEMS);


const SET_FILTERS = "SET_FILTERS";
const ADD_FILTER = "ADD_FILTER";
const DELETE_FILTER = "DELETE_FILTER";
const setFilters = createAction(SET_FILTERS);
const addFilter = createAction(ADD_FILTER);
const deleteFilter = createAction(DELETE_FILTER);


const SET_REG_MODAL_STATUS = "SET_REG_MODAL_STATUS";
const SET_LOGIN_MODAL_STATUS = 'SET_LOGIN_MODAL_STATUS';
const setRegModalStatus = createAction(SET_REG_MODAL_STATUS);
const setLoginModalStatus = createAction(SET_LOGIN_MODAL_STATUS);


const ADD_ITEM_BASKET = "ADD_ITEM_BASKET";
const DELETE_ITEM_BASKET = "DELETE_ITEM_BASKET";
const SET_ITEM_BASKET = "SET_ITEM_BASKET";
const INCREASE_BASKET_ITEM_COUNT = "INCREASE_BASKET_ITEM_COUNT";
const DECREASE_BASKET_ITEM_COUNT = "DECREASE_BASKET_ITEM_COUNT";
const increaseBasketItemCount = createAction(INCREASE_BASKET_ITEM_COUNT);
const decreaseBasketItemCount = createAction(DECREASE_BASKET_ITEM_COUNT);
const addItemBasket = createAction(ADD_ITEM_BASKET);
const deleteItemBasket = createAction(DELETE_ITEM_BASKET);
const setItemBasket = createAction(SET_ITEM_BASKET);

const INCREASE_SUM = "INCREASE_SUM"; 
const DECREASE_SUM = "DECREASE_SUM";
const SET_SUM = "SET_SUM";
const increaseSum = createAction(INCREASE_SUM);
const decreaseSum = createAction(DECREASE_SUM);
const setSum = createAction(SET_SUM);

const SET_LOADING_BASKET = "SET_LOADING_BASKET";
const setLoadingBasket = createAction(SET_LOADING_BASKET);

export {
    SET_USER,
    DELETE_USER,
    SET_AUTH,
    setUser,
    deleteUser,
    setAuth,

    SET_ITEMS,
    setItems,

    SET_FILTERS,
    ADD_FILTER,
    DELETE_FILTER,
    setFilters,
    addFilter,
    deleteFilter,

    SET_REG_MODAL_STATUS,
    SET_LOGIN_MODAL_STATUS,
    setRegModalStatus,
    setLoginModalStatus,

    ADD_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    SET_ITEM_BASKET,
    INCREASE_BASKET_ITEM_COUNT,
    DECREASE_BASKET_ITEM_COUNT,
    increaseBasketItemCount,
    decreaseBasketItemCount,
    addItemBasket,
    deleteItemBasket,
    setItemBasket,
    INCREASE_SUM,
    DECREASE_SUM,
    SET_SUM,
    increaseSum,
    decreaseSum,
    setSum,

    SET_LOADING_BASKET,
    setLoadingBasket,
};