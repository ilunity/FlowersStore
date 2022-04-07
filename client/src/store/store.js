import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./reducer";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
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
//     filters: [
//         "Розы",
//         "Ирисы"
//     ],
//     idAuth: false,
//     user: {},
// }