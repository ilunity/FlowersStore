import {BrowserRouter} from "react-router-dom";
import './scss/style.scss';
import {RouterComponent} from "./components/routerComponent";
import Header from "./components/common/Header";

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