import './App.css'
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FormPage from "./pages/FormPage.jsx";
import {Provider} from "react-redux";
import store from "./store.js";

function App() {

    return (
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/game/:id"} element={<DetailPage/>}/>
                    <Route path={"/form"} element={<FormPage/>}/>
                </Routes>
            </Provider>
        </Router>
    )
}

export default App
