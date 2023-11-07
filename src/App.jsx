import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Login from "./components/user/Auth/Login/Login";
import ConfirmEmail from "./components/user/Auth/ConfirmEmail/ConfirmEmail";
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword";
import ResettPassword from "./components/user/Auth/Reset Password/ResetPassword";
import Landing from "./components/user/Landing/Landing";
import AboutUs from "./components/user/AboutUs/AboutUS";
import ContactUs from "./components/user/CantactUs/ContactUs";
import DashboardLayout from "./components/Dashbord/Dashbord_layout/DashboardLayout";
import Dashboard from "./components/Dashbord/Dashboard/Dashboard";
import Users from "./components/Dashbord/Users/Users";
import Services from "./components/Dashbord/Service/Services";
import Requests from "./components/Dashbord/Requests/Requests ";
import Report from "./components/Dashbord/Report/Report ";
import Notifications from "./components/Dashbord/Notifications/Notifications";
import Settings from "./components/Dashbord/Settings/Settings";
import SignOut from "./components/Dashbord/Sign Out/SignOut";
import VerfictionCode from "./components/user/Auth/VerificationCode/VerificationCode";
import RegisterPatient from "./components/user/Auth/Register/RegisterPatient";
import RegisterProvider from "./components/user/Auth/Register/RegisterProvider";

function App() {
  return (
    <div className="font-alegreya">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPatient />} />
          <Route path="/register-provider" element={<RegisterProvider />} />

          <Route path="/confirm-email" element={<ConfirmEmail />} />

          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification-code" element={<VerfictionCode />} />
          <Route path="/reset-password" element={<ResettPassword />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="services" element={<></>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />}>
              <Route path="service_Providers" element={<Dashboard />} />
              <Route path="patient_Users" element={<Dashboard />} />
              <Route path="Admin_Users" element={<Dashboard />} />
            </Route>

            <Route path="services" element={<Services />}>
              <Route path="Doctors_Services" element={<DoctorServices />} />
            </Route>
            <Route path="requests" element={<Requests />} />
            <Route path="report" element={<Report />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signOut" element={<SignOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
