import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Login from "./components/user/Auth/Login/Login";
import ConfirmEmail from "./components/user/Auth/ConfirmEmail/ConfirmEmail";
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword";
import ResettPassword from "./components/user/Auth/Reset Password/ResetPassword";
import Landing from "./components/user/Landing/Landing";
import AboutUs from "./components/user/AboutUs/AboutUS";
import Service from "./components/user/Services/Services";
import TitleAndSideServices from "./components/user/Services/TitleAndSideServices";
import Map from "./components/user/Services/Map/Map.jsx";
import ContactUs from "./components/user/CantactUs/ContactUs";
import DashboardLayout from "./components/Dashbord/Dashbord_layout/DashboardLayout";
import Dashboard from "./components/Dashbord/Dashboard/Dashboard";
import Service_Provider from "./components/Dashbord/Admin_Dashboard/Users/Service_Providers/Service_Provider.jsx";
import Patient_Users from "./components/Dashbord/Admin_Dashboard/Users/Patient_Users/Patient_Users";
import Admin_Users from "./components/Dashbord/Admin_Dashboard/Users/Admin_Users/Admin_Users";
import Requests from "./components/Dashbord/Admin_Dashboard/Requests/Requests ";
import Report from "./components/Dashbord/Admin_Dashboard/Report/Report ";
import Products from "./components/Dashbord/Admin_Dashboard/Products/Products";
import Settings from "./components/Dashbord/Admin_Dashboard/Settings/Settings";
import SignOut from "./components/Dashbord/Admin_Dashboard/Sign Out/SignOut";
import VerfictionCode from "./components/user/Auth/VerificationCode/VerificationCode";
import RegisterPatient from "./components/user/Auth/Register/RegisterPatient";
import RegisterProvider from "./components/user/Auth/Register/RegisterProvider";
import DoctorServices from "./components/Dashbord/Admin_Dashboard/Service/DoctorServices";
import HospitalServices from "./components/Dashbord/Admin_Dashboard/Service/HospitalServices";
import PharmacyServices from "./components/Dashbord/Admin_Dashboard/Service/PharmacyServices";
import ClinicServices from "./components/Dashbord/Admin_Dashboard/Service/ClinicServices";
import LabServices from "./components/Dashbord/Admin_Dashboard/Service/LabServices";
import Allusers from "./components/Dashbord/Admin_Dashboard/Report/Allusers.jsx";
import Allservices from "./components/Dashbord/Admin_Dashboard/Report/Allservices.jsx";
import Allproducts from "./components/Dashbord/Admin_Dashboard/Report/Allproducts.jsx";
import Home from "./components/Dashbord/Dashbord_service_provider/Service_provider_home/Home.jsx";
import Setting_service_provider from "./components/Dashbord/Dashbord_service_provider/Setting_service_provider/Setting_service_provider.jsx";
import Report_service_provider from "./components/Dashbord/Dashbord_service_provider/Reports/Report_service_provider .jsx"
import AllPatient from "./components/Dashbord/Dashbord_service_provider/Reports/AllPatient.jsx"
import Search from "./components/user/Services/Search/Search.jsx";
import Details from "./components/user/Services/Details/Details.jsx"
import ChoselocationMap from "./components/user/Services/ChoselocationMap/ChoselocationMap.jsx";
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
            <Route path="services" element={<TitleAndSideServices />}>
              <Route index element={<Service />} />
              <Route path="map" element={<ChoselocationMap />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="/details/:id" element={<Details />} />

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
            <Route path="report" element={<Report />}>
              <Route index element={<Allusers />} />
              <Route path="all_services" element={<Allservices />} />
              <Route path="all-product" element={<Allproducts />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signOut" element={<SignOut />} />
          </Route>
          <Route path="/dashboard_service_provider" element={<DashboardLayout />} >
          <Route path="/dashboard_service_provider" element={<Home />} />
          <Route path="report" element={<Report_service_provider  />}>
              <Route index element={<AllPatient />} />
              <Route path="all_services" element={<Allservices />} />
              <Route path="all-product" element={<Allproducts />} />
            </Route>
          <Route path="settings" element={<Setting_service_provider  />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
