import {USER_URL} from "./consts";
import {getToken, setToken} from "../utils/cookiesAPI";
import {HttpError} from "./httpError";


const registerUser = async ({email, password, name, surname}) => {
    try {
        const url = USER_URL + "registration/";

        const bodyJSON = JSON.stringify({
            email,
            password,
            name,
            surname,
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: bodyJSON,
        });

        if (!response.ok) throw HttpError.badStatusError(response);

        const result = await response.json();
        setToken(result.token);
    } catch (error) {
        console.log(error.message);
    }
};

const loginUser = async ({email, password}) => {
    try {
        const url = USER_URL + "login/";

        const bodyJSON = JSON.stringify({
            email,
            password,
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: bodyJSON,
        });

        if (!response.ok) throw HttpError.badStatusError(response);

        const result = await response.json();
        setToken(result.token);
    } catch (error) {
        console.log(error.message);
    }
};

const checkAuth = async () => {
    const url = USER_URL + "auth/";
    const token = getToken();

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw HttpError.badStatusError(response);
        }

        const result = await response.json();
        setToken(result.token);

        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};


export {registerUser, loginUser, checkAuth};