import OurServicesTitle from "../../utilities/OurServicesTitle";
import { Outlet } from "react-router-dom";
import SideServices from "../../user/Services/SideServices";
import Container from "../../utilities/Container";
import { useState } from "react";
export default function TitleAndSideServices() {
  return (
    <Container className={"overflow-hidden "}>
      {/* <div className="flex flex-col justify-center  gap-10  ">
      <div className="bg-red-300">
      <OurServicesTitle />
      </div>
      <div className="flex ">
      <SideServices />
      <div className="bg-red-100 w-full">
            <Outlet />
          </div>

      </div>
      </div> */}

      <div className="flex lg:justify-normal justify-center  ">
        <SideServices />
        <div className="">
          <OurServicesTitle />
          <div className="bg-red-100 ">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}
