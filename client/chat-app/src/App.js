import React from "react";
import { useContext } from "react";


import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import Header from "./components/Header";
import {loginFlgContext} from "./Context";

function App() {
    return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>} onEnter={requireAuth} />
                        <Route path="/signup" element={<SignupPage/>} />
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    );
}
function requireAuth() {
    console.log(loginFlgContext)
}


export default App;
