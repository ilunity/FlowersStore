import {ITEM_URL} from "./consts";
import {REQUEST_METHODS, sendRequest, setParametersToUrl} from "./requestsAPI";

//todo Обработка ошибок
const getItems = async (limit, page, categoriesId) => {
    const parameters = {limit, page};
    const url = setParametersToUrl(`${ITEM_URL}/get`, parameters);


    if (!categoriesId) {
        const items = await sendRequest(url);
        return items;
    }

    const categoriesIdJSON = JSON.stringify({categoriesId});
    const items = await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body: categoriesIdJSON,
    });
    return items;
};

const getItem = (id) => {
    const url = `${ITEM_URL}/get/${id}`;
    const item = sendRequest(url);
    return item;
};

export {getItems, getItem};