import {REQUEST_METHODS, sendRequest} from "./requestsAPI";
import {BASKET_URL} from "./consts";

//todo Обработка ошибок
const addToBasket = async (itemId, count = 1) => {
    const url = BASKET_URL + '/add_item';

    const body = {itemId, count};

    const onSuccess = () => {
        return true;
    };
    const onError = () => {
        return false;
    };

    const isSuccess = await sendRequest(url, {
        method: REQUEST_METHODS.POST,
        body,
        isAttachToken: true,
        onSuccess,
        onError,
    });

    return isSuccess;
};

const getAll = async () => {
    const url = BASKET_URL + '/get_all';
    const countedItems = await sendRequest(url, {
        isAttachToken: true,
    });

    return {items: countedItems.rows, count: countedItems.count};
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