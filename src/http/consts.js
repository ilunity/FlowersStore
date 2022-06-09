const HOST = 'https://flowersstore.herokuapp.com'
const API_ENDPOINT = HOST + '/api';

const USER_URL = API_ENDPOINT + "/user";
const CATEGORY_URL = API_ENDPOINT + "/category";
const CATEGORY_GROUP_URL = API_ENDPOINT + "/category_group";
const ITEM_URL = API_ENDPOINT + "/item";
const BASKET_URL = API_ENDPOINT + "/basket";

const STATIC_URL = HOST;

export {API_ENDPOINT, USER_URL, CATEGORY_URL, CATEGORY_GROUP_URL, ITEM_URL, BASKET_URL, STATIC_URL};