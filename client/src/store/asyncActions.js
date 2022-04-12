import {setAuth, setItems} from "./actions";
import {checkAuth} from "../http/userAPI";
import {setToken} from "../utils/cookiesAPI";
import {getItems} from "../http/itemsAPI";

const FETCH_ITEMS = "FETCH_ITEMS";

const fetchItems = (limit, page, filters) => {
    return async (dispatch) => {
        dispatch({type: FETCH_ITEMS});
        const items = await getItems(limit, page, filters);
        dispatch(setItems(items));
    };
};

const getAuthStatus = () => {
    return async (dispatch) => {
        const isAuth = await checkAuth();
        dispatch(setAuth(isAuth));
    };
};

const exitUser = () => {
    return async (dispatch) => {
        setToken(null);
        dispatch(setAuth(false));
    };
};

export {FETCH_ITEMS, getAuthStatus, exitUser};