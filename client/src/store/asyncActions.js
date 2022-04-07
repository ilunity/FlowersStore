import {setAuth} from "./actions";
import {checkAuth} from "../http/userAPI";
import {setToken} from "../utils/cookiesAPI";

const FETCH_ITEMS = "FETCH_ITEMS";

const fetchItems = () => {
    return async (dispatch) => {

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