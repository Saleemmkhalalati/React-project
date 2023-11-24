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
import Service_Provider from "./components/Dashbord/Users/Service_Providers/Service_Provider";
import Patient_Users from "./components/Dashbord/Users/Patient_Users/Patient_Users";
import Admin_Users from "./components/Dashbord/Users/Admin_Users/Admin_Users";
import Requests from "./components/Dashbord/Requests/Requests ";
import Report from "./components/Dashbord/Report/Report ";
import Products from "./components/Dashbord/Products/Products";
import Settings from "./components/Dashbord/Settings/Settings";
import SignOut from "./components/Dashbord/Sign Out/SignOut";
import VerfictionCode from "./components/user/Auth/VerificationCode/VerificationCode";
import RegisterPatient from "./components/user/Auth/Register/RegisterPatient";
import RegisterProvider from "./components/user/Auth/Register/RegisterProvider";
import DoctorServices from "./components/Dashbord/Service/DoctorServices";
import HospitalServices from "./components/Dashbord/Service/HospitalServices";
import PharmacyServices from "./components/Dashbord/Service/PharmacyServices";
import ClinicServices from "./components/Dashbord/Service/ClinicServices";
import LabServices from "./components/Dashbord/Service/LabServices";
import Allusers from "./components/Dashbord/Report/Allusers.jsx";
import Allservices from "./components/Dashbord/Report/Allservices.jsx";
import Allproducts from "./components/Dashbord/Report/Allproducts.jsx"
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

            <Route path="users" element={<Dashboard />} />
            <Route
              path="users/service_Providers"
              element={<Service_Provider />}
            />
            <Route path="users/patient_Users" element={<Patient_Users />} />
            <Route path="users/Admin_Users" element={<Admin_Users />} />

            <Route path="services" element={<Dashboard />} />
            <Route
              path="services/Doctors_Services"
              element={<DoctorServices />}
            />
            <Route
              path="services/Hospital_Services"
              element={<HospitalServices />}
            />
            <Route
              path="services/Pharmacy_Services"
              element={<PharmacyServices />}
            />
            <Route
              path="services/Clinic_Services"
              element={<ClinicServices />}
            />
            <Route path="services/Lab_Services" element={<LabServices />} />

            <Route path="requests" element={<Requests />} />
            <Route path="report" element={<Report />} > 
            <Route index     element={<Allusers />} /> 
            <Route path="all_services" element={<Allservices />} /> 
            <Route path="all-product" element={<Allproducts />} /> 


            
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signOut" element={<SignOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
