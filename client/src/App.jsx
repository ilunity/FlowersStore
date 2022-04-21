import {BrowserRouter} from "react-router-dom";
import './scss/app.scss';
import {RouterComponent} from "./components/RouterComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "./store/asyncActions";
import Header from "./components/common/header/Header";
import {Modals} from "./components/modals/Modals";
import Footer from "./components/common/footer/Footer";
import Basket from "./pages/Basket";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <Modals/>
            <BrowserRouter>
                <RouterComponent/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;