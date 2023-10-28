import { Outlet } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";

export default function UserLayout() {
    return (
        <>
            <UserNavBar />
            <Outlet />
            <Footer />
        </>
    );
}
