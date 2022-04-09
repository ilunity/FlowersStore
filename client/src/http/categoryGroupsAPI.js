import {CATEGORY_GROUP_URL} from "./consts";
import {sendRequest, setParametersToUrl} from "./requestsAPI";

const getGroupedCategories = async () => {
    const url = CATEGORY_GROUP_URL + '/get_grouped_categories';
    const groupedCategories = sendRequest(url, {isAttachToken: false});
    return groupedCategories;
};

export {getGroupedCategories};