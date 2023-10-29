import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Landing from "./components/user/Landing/Landing";
import ContactUs from "./components/user/CantactUs/ContactUs";
import Login from "./components/user/Auth/Login/Login";
import Register from "./components/user/Auth/Register/Register";
import ConfirmEnail from './components/user/Auth/ConfirmEmail/ConfirmEmail'
function App() {
  return (
    <div className="font-alegreya">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-email" element={<ConfirmEnail />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<></>} />
            <Route path="/about-us" element={<></>} />
            <Route path="/contact-us" element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
