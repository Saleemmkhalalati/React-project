import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Landing from "./components/user/Landing/Landing";
import ContactUs from "./components/user/CantactUs/ContactUs"
import DashbordLayout from "./components/Dashbord/Dashbord_layout/DashbordLayout"
import Users from "./components/Dashbord/Users/Users"
import Services from "./components/Dashbord/Service/Services"
import Requests from "./components/Dashbord/Requests/Requests "
import Report from "./components/Dashbord/Report/Report "
import Notifications from "./components/Dashbord/Notifications/Notifications"
import Settings from "./components/Dashbord/Settings/Settings"
import SignOut from "./components/Dashbord/Sign Out/SignOut"


import Login from "./components/user/Auth/Login/Login";
import AboutUs from "./components/user/AboutUs/AboutUS";
import Register from "./components/user/Auth/Register/Register";
import ConfirmEmail from "./components/user/Auth/ConfirmEmail/ConfirmEmail";
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword";
import ResettPassword from "./components/user/Auth/Reset Password/ResetPassword";
import VerfictionCode from "./components/user/Auth/VerfictionCode/VerfictionCode";

function App() {

 

    return (
        <div className="font-alegreya">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirm-email" element={<ConfirmEmail />} />
                    <Route path="/verfiction-code" element={<VerfictionCode />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                    <Route path="/reset-password" element={<ResettPassword />} />
                    <Route path="/" element={<UserLayout />}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/services" element={<></>} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Route>
                     <Route path="/dashbord" element={<DashbordLayout/>} >
                     <Route path="users" element={<Users />} />
                     <Route path="services" element={<Services />} />
                     <Route path="requests" element={<Requests  />} />
                     <Route path="report" element={<Report  />} />
                     <Route path="notifications " element={<Notifications  />} />
                     <Route path="settings" element={<Settings />} />
                     <Route path="signOut" element={<SignOut  />} />
                     </Route>

                </Routes>
            </BrowserRouter>
        </div>
    );

}
export default App
