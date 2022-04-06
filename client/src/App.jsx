import {BrowserRouter} from "react-router-dom";
import './scss/style.scss';
import {RouterComponent} from "./components/routerComponent";
import Header from "./components/common/Header";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <RouterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;