import {BrowserRouter} from "react-router-dom";
import './scss/style.scss';
import {RouterComponent} from "./components/routerComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "./store/asyncActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);

    return (
        <div>
            <BrowserRouter>
                <RouterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;