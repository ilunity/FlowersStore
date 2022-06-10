import Cookies from "js-cookie";
import {TOKEN, TOKEN_EXPIRATION} from "./consts";

const setToken = (value) => {
    Cookies.set(
        TOKEN,
        value,
        {expires: TOKEN_EXPIRATION}
    );
}

const getToken = () => {
    return Cookies.get(TOKEN);
}

export {setToken, getToken};