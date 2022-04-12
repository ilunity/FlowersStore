import {BrowserRouter} from "react-router-dom";
import './scss/app.scss';
import {RouterComponent} from "./components/routerComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "./store/asyncActions";
import Header from "./components/common/header/Header";
import {Modals} from "./components/modals/Modals";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <main>
                <Modals/>
                <BrowserRouter>
                    <RouterComponent/>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;