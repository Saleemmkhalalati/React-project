import React from "react";
import Content from "../../Dashbord_layout/Content/Content";
import { Outlet } from "react-router-dom";
import Department from "../../Dashbord_layout/Department/Department";

const Report_service_provider = () => {
  return (
    <Content path={" Report"}>
      <div className="flex flex-wrap flex-col lg:flex-row  xl:gap-1  lg:gap-4 justify-between items-center xl:items-start gap-2 mt-3 ">
        <div className="flex flex-col flex-wrap md:flex-row xl:gap-5  lg:w-[68%] xl:w-[77%] sm:w-[100%]    gap-5 xl:justify-between lg:justify-around sm:justify-center sm:items-center  w-full xl:h-[10rem]">
          <Department
            path="all_users"
            title="All Patient - 50.000"
            descrption="All patients for you (service providers - doctor (dental))"
          />
          <Department
            path="all_services"
            title="All Services - 100"
            descrption="All services for you (service providers - doctor (dental))"
          />

          <Department
            path="all-product"
            title="All Product - 20"
            descrption="All product for you (service providers - doctor(dental))"
          />
        </div>

        <Outlet />
      </div>
    </Content>
  );
};

export default Report_service_provider;
