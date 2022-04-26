import {ITEM_URL, STATIC_URL} from "./consts";
import {REQUEST_METHODS, sendRequest, setParametersToUrl} from "./requestsAPI";

//todo Обработка ошибок
const getItems = async (limit, page, categoriesId) => {
    const parameters = {limit, page};
    const url = setParametersToUrl(`${ITEM_URL}/get`, parameters);


    if (!categoriesId.length) {
        const countedItems = await sendRequest(url, {});
        return {items: countedItems.rows, count: countedItems.count};
    }

    const body = {categories: categoriesId};
    const countedItems = await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
    });

    return {items: countedItems.rows, count: countedItems.count};
};

const getAll = async () => {
    const url = `${ITEM_URL}/get`;

    const items = await sendRequest(url, {});
    console.log(items);
    return items;
};

const getItem = async (itemId) => {
    const url = `${ITEM_URL}/${itemId}`;
    const item = await sendRequest(url, {});
    return item;
};

const getImg = async (imgName) => {
    const url = `${STATIC_URL}/${imgName}`;
    const img = await sendRequest(url, {});
    return img;
};

export {getItems, getItem, getImg, getAll};