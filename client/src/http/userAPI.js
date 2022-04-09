import {USER_URL} from "./consts";
import {setToken} from "../utils/cookiesAPI";
import {REQUEST_METHODS, sendRequest} from "./requestsAPI";

const onSuccess = (result) => {
    setToken(result.token);
    return true;
};

const onError = (error) => {
    console.log(error.message);
    return false;
};

const registerUser = async ({email, password, name, surname}) => {
    const url = USER_URL + "/registration";

    const body = {
        email,
        password,
        name,
        surname,
    };

    const requestResult = await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        onSuccess,
        onError,
    });

    return requestResult;
};

const loginUser = async ({email, password}) => {
    const url = USER_URL + "/login";

    const body = {
        email,
        password,
    };

    const requestResult = await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        onSuccess,
        onError,
    });

    return requestResult;
};

const checkAuth = async () => {
    const url = USER_URL + "/auth";

    const requestResult = await sendRequest(url, {onSuccess, onError});
    return requestResult;
}

export {registerUser, loginUser, checkAuth};