import { Outlet } from "react-router-dom";
import NavBarDashbord from "./NavBar_Dashbord/NavBarDashbord";
import SideBardashbord from "./SideBar_Dashbord/SideBardashbord";

const DashboardLayout = () => {
    return (
        <>
            <div className="flex  shadow-lg">
                <SideBardashbord />
                <div className="xl:w-[80%] sm:w-[90%] w-scree h-full h-scree   ">
                    <NavBarDashbord />
                    <div className="bg-myGray-200 h-full  ">
                        
                        <Outlet className="h-full  "/>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
