import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/user/Langing/Landing";
import UserLayout from "./components/user/layout/UserLayout";
import ContactUs from "./components/user/CantactUs/ContactUs";
import Register from "./components/user/Auth/Register/Register";
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;