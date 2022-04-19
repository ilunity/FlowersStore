import Basket from "../pages/Basket";
import Item from "../pages/Item";
import Catalog from "../pages/Catalog";
import Order from "../pages/Order";
import Home from "../pages/Home";
import About from "../pages/info/About";
import Сontacts from "../pages/info/Сontacts";
import PaymentDelivery from "../pages/info/PaymentDelivery";

const paths = {
    HOME: "/",
    ITEM: "/item/:id",
    CATALOG: "/catalog",
    BASKET: "/basket",
    ORDER: "/order",
    ABOUT: "/about",
    СONTACTS: "/contacts",
    PAYMENT_DELIVERY: "/payment_delivery,"
};

const routes = [
    {
        path: paths.ITEM,
        component: Item,
    },
    {
        path: paths.ABOUT,
        component: About,
    },
    {
        path: paths.СONTACTS,
        component: Сontacts,
    },
    {
        path: paths.PAYMENT_DELIVERY,
        component: PaymentDelivery,
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