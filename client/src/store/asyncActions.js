import { checkAuth } from "../http/userAPI";
import { setToken } from "../utils/cookiesAPI";
import { setAuth } from "./reducers/authReducer";

const getAuthStatus = () => {
    return async dispatch => {
        try {
            const isAuth = await checkAuth();
            dispatch(setAuth(isAuth));
        } catch (error) {
            console.log(error);
        }
    };
};

const exitUser = () => {
    return async dispatch => {
        try {
            setToken(null);
            dispatch(setAuth(false));
        } catch (error) {
            console.log(error);
        }
    };
};

export { getAuthStatus, exitUser };
