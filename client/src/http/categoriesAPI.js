import {CATEGORY_URL} from "./consts";
import {sendRequest, setParametersToUrl} from "./requestsAPI";

//todo Обработка ошибок
const getAll = async () => {
    const url = CATEGORY_URL + '/get';
    const categories = await sendRequest(url);
    return categories;
};

const getByName = async (name) => {
    const url = setParametersToUrl(`${url}/get_by_name`, {name});
    const category = await sendRequest(url);
    return category;
};

const getById = async (id) => {
    const url = setParametersToUrl(`${url}/get_by_id`, {id});
    const category = await sendRequest(url);
    return category;
};

export {getAll, getByName, getById};