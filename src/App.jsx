import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Landing from "./components/user/Langing/Landing";
import Register from "./components/user/Langing/Auth/Register/Register";
import ConfirmEmail from "./components/user/Langing/Auth/ConfirmEmail/ConfirmEmail";
import ContainerImg from "./components/user/Langing/Auth/ContainerImage/ContainerImg";
import Test from "./components/user/Langing/Auth/ConfirmEmail/Test"
function App() {
    return (
        <div className="font-alegreya">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/services" element={<></>} />
                    <Route path="/about-us" element={<></>} />
                    <Route path="/contact-us" element={<></>} />
                    <Route path="/login" element={<></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
