import {BrowserRouter} from "react-router-dom";
import './scss/style.scss';
import {RouterComponent} from "./components/routerComponent";

function App() {

    return (
        <div>
            <BrowserRouter>
                <RouterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;