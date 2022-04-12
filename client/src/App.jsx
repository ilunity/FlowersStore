import {BrowserRouter} from "react-router-dom";
import './scss/app.scss';
import {RouterComponent} from "./components/routerComponent";
import Header from "./components/common/header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuthStatus } from "./store/asyncActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <RouterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;