import OurServicesTitle from "../../utilities/OurServicesTitle";
import { Outlet } from "react-router-dom";
import SideServices from "./ServicesComponents/SideServices";
import Container from "../../utilities/Container";
export default function TitleAndSideServices() {
  return (
    <Container className={"overflow-hidden "}>
      <div className="flex justify-center lg:justify-normal ">
        <SideServices />
        <div className="w-[75%]">
          <OurServicesTitle className={"w-[100%]  lg:w-[85%] "} />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}
