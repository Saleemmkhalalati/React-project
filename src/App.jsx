import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Landing from "./components/user/Langing/Landing";
import Login from "./components/user/Authentication/Login/Login";

function App() {
  return (
    <div className="font-alegreya">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<></>} />
          <Route path="/about-us" element={<></>} />
          <Route path="/contact-us" element={<></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
