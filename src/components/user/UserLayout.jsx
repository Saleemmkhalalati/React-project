import { Outlet } from "react-router-dom";
import UserNavBar from "../layout/UserNavBar";
import Footer from "../layout/Footer";

export default function UserLayout() {
    return (
        <>
            <UserNavBar />
            <Outlet />
            <Footer />
        </>
    );
}
