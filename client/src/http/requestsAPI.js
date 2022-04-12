import {HttpError} from "./httpError";
import {getToken} from "../utils/cookiesAPI";

const REQUEST_METHODS = {
    POST: 'POST',
    GET: 'GET',
};


const getRequestOptionsObject = ({method, body, isAttachToken}) => {
    const options = {};

    if (method === REQUEST_METHODS.POST) {
        options.method = method;
    }

    if (body) {
        const bodyJSON = JSON.stringify(body);

        options.headers = {
            'Content-Type': 'application/json;charset=utf-8',
        };
        options.body = bodyJSON;
    }

    if (isAttachToken) {
        const token = getToken();
        options.headers = Object.assign({}, options?.headers, {'Authorization': `Bearer ${token}`});
    }

    return options;
}


const sendRequest = async ( url,
    {
        method = REQUEST_METHODS.GET,
        body,
        isAttachToken = false,
        onSuccess,
        onError = console.log,
    }
) => {
    try {
        if (!Object.values(REQUEST_METHODS).includes(method)) throw new SyntaxError(`Несуществующий метод: ${method}`);

        const requestOptions = getRequestOptionsObject({method, body, isAttachToken});
        const response = await fetch(url, requestOptions);

        const result = await response.json();

        if (!response.ok) throw HttpError.badStatusError(response, result);

        if (onSuccess) return onSuccess(result);

        return result;
    } catch (error) {
        return onError(error);
    }
};


const setParametersToUrl = (url, parameters) => {
    url += '/';
    Object.entries(parameters).forEach((parameter) => {
        url += `${parameter[0]}=${parameter[1]}&`
    })
    url = url.slice(0, url.length - 1);
    return url;
}

export {REQUEST_METHODS, sendRequest, setParametersToUrl};