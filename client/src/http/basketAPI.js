import {REQUEST_METHODS, sendRequest} from "./requestsAPI";
import {BASKET_URL} from "./consts";

//todo Обработка ошибок
const addToBasket = async (itemId) => {
    const url = BASKET_URL + '/addItem';

    const bodyJSON = JSON.stringify({itemId});
    await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body: bodyJSON,
        isAttachToken: true,
    });
};

const getAll = async () => {
    const url = BASKET_URL + '/getAll';
    const items = await sendRequest(url);
    return items;
};

export {addToBasket, getAll};