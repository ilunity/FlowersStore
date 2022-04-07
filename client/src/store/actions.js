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
const SET_ITEMS = "SET_ITEMS";
const SET_FILTERS = "SET_FILTERS";
const ADD_FILTER = "ADD_FILTER";
const DELETE_FILTER = "DELETE_FILTER";


const setUser = createAction(SET_USER);

const deleteUser = createSimpleAction(DELETE_USER);

const setAuth = createAction(SET_AUTH);

const setItems = createAction(SET_ITEMS);

const setFilters = createAction(SET_FILTERS);

const addFilter = createAction(ADD_FILTER);

const deleteFilter = createAction(DELETE_FILTER);

export {
    SET_USER,
    DELETE_USER,
    SET_AUTH,
    SET_ITEMS,
    SET_FILTERS,
    ADD_FILTER,
    DELETE_FILTER,
    setUser,
    deleteUser,
    setAuth,
    setItems,
    setFilters,
    addFilter,
    deleteFilter
};