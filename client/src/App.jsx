import {BrowserRouter} from "react-router-dom";
import './scss/style.scss';
import {RouterComponent} from "./components/routerComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "./store/asyncActions";
import Header from "./components/common/Header";
import InteractionButton from "./components/common/InteractionButton";
import {setLoginModalStatus, setRegModalStatus} from "./store/actions";
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