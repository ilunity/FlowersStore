import Basket from "../pages/Basket"
import Item from "../pages/Item"
import Catalog from "../pages/Catalog"
import Order from "../pages/Order"
import Home from "../pages/Home"
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