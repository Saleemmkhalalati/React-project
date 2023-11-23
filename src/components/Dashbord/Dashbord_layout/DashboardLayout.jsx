import { Outlet } from "react-router-dom";
import NavBarDashbord from "./NavBar_Dashbord/NavBarDashbord";
import SideBardashbord from "./SideBar_Dashbord/SideBardashbord";

const DashboardLayout = () => {
    return (
        <>
            <div className="flex   shadow-lg">
                <SideBardashbord />
                <div className="w-[80%] h-full   ">
                    <NavBarDashbord />
                    <div className="bg-myGray-200 h-full bg-blak ">
                        
                        <Outlet className="h-full "/>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
