import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Landing from "./components/user/Landing/Landing"
import ContactUs from "./components/user/CantactUs/ContactUs";
import Register from "./components/user/Auth/Register/Register";
import ConfirmEmail from "./components/user/Auth/ConfirmEmail/ConfirmEmail"
function App() {
    return (
        <div className="font-alegreya">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<></>} />
                    <Route path="/" element={<UserLayout />}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/services" element={<></>} />
                        <Route path="/about-us" element={<></>} />
                        <Route path="/contact-us" element={<ContactUs/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/confirm-email" element={<ConfirmEmail/>} />


                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App