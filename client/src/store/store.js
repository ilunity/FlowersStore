import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./reducer";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
);


export {store};


// const store = {
//     items: {
//         isFetching: false,
//         payload: [
//             {
//                 id: 1,
//                 name: "101 красная роза",
//                 price: 10000,
//             },
//             {
//                 id: 2,
//                 name: "Влюбленность",
//                 price: 5000,
//             }
//         ],
//     },
//     activeModals: {
//         registration: false,
//         login: false,
//     },
//     filters: [2, 5, 8],
//     isAuth: false,
//     user: {},
// };