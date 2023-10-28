import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Landing from "./components/user/Landing/Landing"
import ContactUs from "./components/user/CantactUs/ContactUs";
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