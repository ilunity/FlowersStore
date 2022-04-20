import {REQUEST_METHODS, sendRequest} from "./requestsAPI";
import {BASKET_URL} from "./consts";

//todo Обработка ошибок
const addToBasket = async (itemId, count) => {
    const url = BASKET_URL + '/add_item';

    const body = {itemId, count};
    await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        isAttachToken: true,
    });
};

const getAll = async () => {
    const url = BASKET_URL + '/get_all';
    const items = await sendRequest(url, {
        isAttachToken: true,
    });
    console.log(items);
    return items;
};
const deleteFromBasket = async (itemId) => {
    const url = BASKET_URL + '/delete_item';

    const body = {itemId};
    await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        isAttachToken: true,
    });
};

const setItemCount = async (itemId, count) => {
    const url = BASKET_URL + '/set_count';

    const body = {itemId, count};
    await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        isAttachToken: true,
    });
};

export {addToBasket, getAll, deleteFromBasket, setItemCount};