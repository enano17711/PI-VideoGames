import './App.css'
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FormPage from "./pages/FormPage.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/game/:id"} element={<DetailPage/>}/>
                <Route path={"/form"} element={<FormPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
