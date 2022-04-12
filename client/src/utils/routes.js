import {Basket} from "../pages/basket";
import {Home} from "../pages/home";
import {Item} from "../pages/item";
import {Catalog} from "../pages/catalog";
import {Order} from "../pages/order";

const paths = {
    HOME: "/",
    ITEM: "/item/:id",
    CATALOG: "/catalog",
    BASKET: "/basket",
    ORDER: "/order",
};

const routes = [
    {
        path: paths.ITEM,
        component: Item,
    },
    {
        path: paths.CATALOG,
        component: Catalog,
    },
    {
        path: paths.BASKET,
        component: Basket,
    },
    {
        path: paths.ORDER,
        component: Order,
    },

    // HOME must be the last (default page)
    {
        path: paths.HOME,
        component: Home,
    },
];

export {paths, routes};